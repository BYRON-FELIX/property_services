from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    email = models.EmailField(blank=True)
    property_name = models.CharField(max_length=200, blank=True)
    location = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Technician(models.Model):
    SPECIALTY_CHOICES = [
        ("Plumbing", "Plumbing"),
        ("Electrical", "Electrical"),
        ("HVAC", "HVAC"),
        ("Carpentry", "Carpentry"),
        ("Masonry", "Masonry"),
        ("Painting", "Painting"),
        ("Tiling", "Tiling"),
        ("Roofing", "Roofing"),
        ("Security", "Security"),
        ("Solar", "Solar"),
        ("General Maintenance", "General Maintenance"),
    ]

    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    specialty = models.CharField(
        max_length=100,
        choices=SPECIALTY_CHOICES
    )
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.specialty}"


class ServiceRequest(models.Model):
    STATUS_CHOICES = [
        ("New", "New"),
        ("Assigned", "Assigned"),
        ("In Progress", "In Progress"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ]

    SERVICE_CHOICES = [
        ("Plumbing", "Plumbing"),
        ("Electrical", "Electrical"),
        ("HVAC", "HVAC"),
        ("Carpentry", "Carpentry"),
        ("Masonry", "Masonry"),
        ("Painting", "Painting"),
        ("Tiling", "Tiling"),
        ("Roofing", "Roofing"),
        ("Security", "Security"),
        ("Solar", "Solar"),
        ("General Maintenance", "General Maintenance"),
    ]

    request_id = models.CharField(
        max_length=20,
        unique=True,
        blank=True
    )

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name="service_requests"
    )

    service = models.CharField(
        max_length=100,
        choices=SERVICE_CHOICES
    )

    description = models.TextField()

    preferred_date = models.DateField(
        null=True,
        blank=True
    )

    technician = models.ForeignKey(
        Technician,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="service_requests"
    )

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="New"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.request_id:
            last_request = ServiceRequest.objects.order_by("-id").first()

            if last_request:
                number = last_request.id + 1
            else:
                number = 1

            self.request_id = f"SR-{1000 + number}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.request_id