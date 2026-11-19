from django.urls import path

from . import views

urlpatterns = [
    path("project-categories/", views.categories, name="project-categories"),
    path("project-categories/<slug:slug>/", views.category_detail, name="project-category"),
    path("project-media/<str:filename>", views.photo, name="project-photo"),
]
