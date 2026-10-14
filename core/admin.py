from django.contrib import admin
from .models import Customer, Technician, ServiceRequest


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "property_name",
        "location",
        "created_at",
    )

    search_fields = (
        "name",
        "phone",
        "property_name",
        "location",
    )

    ordering = ("-created_at",)


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "specialty",
        "is_available",
    )

    list_filter = (
        "specialty",
        "is_available",
    )

    search_fields = (
        "name",
        "phone",
    )

    ordering = ("name",)


@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = (
        "request_id",
        "customer",
        "service",
        "technician",
        "status",
        "preferred_date",
        "created_at",
    )

    list_filter = (
        "status",
        "service",
        "technician",
    )

    search_fields = (
        "request_id",
        "customer__name",
        "customer__phone",
        "customer__property_name",
        "customer__location",
        "description",
    )

    list_editable = (
        "technician",
        "status",
    )

    readonly_fields = (
        "request_id",
        "created_at",
        "updated_at",
    )

    ordering = ("-created_at",)

    fieldsets = (
        (
            "Request Information",
            {
                "fields": (
                    "request_id",
                    "service",
                    "description",
                    "preferred_date",
                )
            },
        ),
        (
            "Customer",
            {
                "fields": (
                    "customer",
                )
            },
        ),
        (
            "Assignment",
            {
                "fields": (
                    "technician",
                    "status",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )