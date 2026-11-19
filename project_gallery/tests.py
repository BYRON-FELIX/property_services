from contextlib import closing
from io import BytesIO
from pathlib import Path
from tempfile import TemporaryDirectory

from PIL import Image
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.urls import reverse

from .models import Project, ProjectCategory, ProjectPhoto


def upload():
    image = BytesIO()
    Image.new("RGB", (16, 16), "blue").save(image, format="PNG")
    return SimpleUploadedFile("work.png", image.getvalue(), content_type="image/png")


class ProjectGalleryTests(TestCase):
    def setUp(self):
        media = TemporaryDirectory()
        self.addCleanup(media.cleanup)
        self.enterContext(self.settings(MEDIA_ROOT=Path(media.name)))
        self.category = ProjectCategory.objects.get(slug="plumbing-water-infrastructure")
        self.category_url = reverse("project-category", args=[self.category.slug])

    def test_seeded_covers_and_admin_replacement(self):
        staff = get_user_model().objects.create_superuser("gallery-admin", password="test")
        self.client.force_login(staff)
        admin_url = reverse("admin:project_gallery_projectcategory_change", args=[self.category.pk])
        categories_url = reverse("project-categories")
        self.assertEqual(len(self.client.get(categories_url).json()), 6)
        fields = {
            "name": self.category.name,
            "title": self.category.title,
            "slug": self.category.slug,
            "default_cover_url": self.category.default_cover_url,
            "position": self.category.position,
        }
        self.assertEqual(self.client.post(admin_url, {**fields, "cover": upload()}).status_code, 302)
        self.category.refresh_from_db()
        self.assertEqual(self.client.get(self.category_url).json()["cover_url"], self.category.cover.url)
        with closing(self.client.get(self.category.cover.url)) as response:
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response["Content-Type"], "image/png")

        self.assertEqual(self.client.post(admin_url, {**fields, "cover-clear": "on"}).status_code, 302)
        self.assertEqual(self.client.get(self.category_url).json()["cover_url"], self.category.default_cover_url)

    def test_gallery_filters_by_category_and_publication(self):
        staff = get_user_model().objects.create_superuser("gallery-admin", password="test")
        self.client.force_login(staff)
        admin_url = reverse("admin:project_gallery_project_add")
        self.assertEqual(self.client.post(admin_url, {
            "category": self.category.pk,
            "title": "Drainage repair",
            "photos-TOTAL_FORMS": "2",
            "photos-INITIAL_FORMS": "0",
            "photos-0-image": upload(),
            "photos-0-position": "1",
            "photos-1-image": upload(),
            "photos-1-position": "2",
        }).status_code, 302)
        draft = Project.objects.get(title="Drainage repair")
        photo_url = ProjectPhoto.objects.filter(project=draft).first().image.url
        self.client.logout()
        self.assertEqual(self.client.get(self.category_url).json()["projects"], [])
        self.assertEqual(self.client.get(photo_url).status_code, 404)

        another_category = ProjectCategory.objects.exclude(pk=self.category.pk).first()
        Project.objects.create(category=another_category, title="Other work", published=True)
        draft.published = True
        draft.save(update_fields=["published"])
        projects = self.client.get(self.category_url).json()["projects"]
        self.assertEqual([project["title"] for project in projects], ["Drainage repair"])
        self.assertEqual(len(projects[0]["photos"]), 2)
        with closing(self.client.get(photo_url)) as response:
            self.assertEqual(response.status_code, 200)
            self.assertTrue(b"".join(response.streaming_content).startswith(b"\x89PNG"))
