from django.contrib import admin

from .models import Project, ProjectCategory, ProjectPhoto


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "name", "position")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "name")


class ProjectPhotoInline(admin.TabularInline):
    model = ProjectPhoto
    extra = 1


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "published", "created_at")
    list_filter = ("category", "published")
    search_fields = ("title", "description")
    inlines = (ProjectPhotoInline,)
