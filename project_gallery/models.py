from pathlib import Path
from uuid import uuid4

from django.core.exceptions import ValidationError
from django.core.validators import FileExtensionValidator
from django.db import models


def photo_path(instance, filename):
    return f"{uuid4().hex}{Path(filename).suffix.lower()}"


def validate_photo_size(photo):
    if photo.size > 5 * 1024 * 1024:
        raise ValidationError("Each image must be 5 MB or smaller.")


photo_validators = [
    FileExtensionValidator(["jpg", "jpeg", "png", "webp"]),
    validate_photo_size,
]


class ProjectCategory(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    default_cover_url = models.URLField(max_length=500, blank=True)
    cover = models.ImageField(
        upload_to=photo_path, validators=photo_validators, blank=True,
        help_text="Upload a replacement cover. Clearing it restores the default cover.",
    )
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ("position", "pk")
        verbose_name_plural = "project categories"

    def __str__(self):
        return self.title


class Project(models.Model):
    category = models.ForeignKey(ProjectCategory, on_delete=models.PROTECT, related_name="projects")
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("-created_at", "-pk")

    def __str__(self):
        return self.title


class ProjectPhoto(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="photos")
    image = models.ImageField(upload_to=photo_path, validators=photo_validators)
    caption = models.CharField(max_length=160, blank=True)
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ("position", "pk")
