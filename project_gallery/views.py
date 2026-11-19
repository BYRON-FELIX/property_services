from pathlib import Path

from django.http import FileResponse, Http404, JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.cache import never_cache
from django.views.decorators.http import require_safe

from .models import ProjectCategory, ProjectPhoto


def category_data(category):
    return {
        "slug": category.slug,
        "name": category.name,
        "title": category.title,
        "description": category.description,
        "cover_url": category.cover.url if category.cover else category.default_cover_url,
    }


@require_safe
def categories(request):
    return JsonResponse([category_data(category) for category in ProjectCategory.objects.all()], safe=False)


@require_safe
def category_detail(request, slug):
    category = get_object_or_404(ProjectCategory, slug=slug)
    data = category_data(category)
    data["projects"] = [
        {
            "id": project.pk,
            "title": project.title,
            "description": project.description,
            "photos": [
                {"id": photo.pk, "url": photo.image.url, "caption": photo.caption}
                for photo in project.photos.all()
            ],
        }
        for project in category.projects.filter(published=True).prefetch_related("photos")
    ]
    return JsonResponse(data)


@require_safe
@never_cache
def photo(request, filename):
    content_type = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
    }.get(Path(filename).suffix.lower())
    if not content_type:
        raise Http404

    cover = ProjectCategory.objects.filter(cover=filename).first()
    if cover:
        image = cover.cover
    else:
        photos = ProjectPhoto.objects.all()
        if not request.user.has_perm("project_gallery.view_project"):
            photos = photos.filter(project__published=True)
        image = get_object_or_404(photos, image=filename).image

    try:
        response = FileResponse(image.open("rb"), content_type=content_type)
    except FileNotFoundError as error:
        raise Http404 from error
    response["X-Content-Type-Options"] = "nosniff"
    return response
