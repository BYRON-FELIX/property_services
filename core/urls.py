from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    CustomerViewSet,
    TechnicianViewSet,
    ServiceRequestViewSet,
)

router = DefaultRouter()

router.register("customers", CustomerViewSet)
router.register("technicians", TechnicianViewSet)
router.register("service-requests", ServiceRequestViewSet)

urlpatterns = [
    path("", include(router.urls)),
]