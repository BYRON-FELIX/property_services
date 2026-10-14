from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from .models import Customer, Technician, ServiceRequest
from .serializers import (
    CustomerSerializer,
    TechnicianSerializer,
    ServiceRequestSerializer,
)

from .notifications.email import send_service_request_received_email


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by("-created_at")
    serializer_class = CustomerSerializer


class TechnicianViewSet(viewsets.ModelViewSet):
    queryset = Technician.objects.all().order_by("name")
    serializer_class = TechnicianSerializer


class ServiceRequestViewSet(viewsets.ModelViewSet):
    queryset = ServiceRequest.objects.all().order_by("-created_at")
    serializer_class = ServiceRequestSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        customer_data = {
            "name": data.get("customer_name"),
            "phone": data.get("customer_phone"),
            "email": data.get("customer_email", ""),
            "property_name": data.get("property_name", ""),
            "location": data.get("location", ""),
        }

        customer_serializer = CustomerSerializer(data=customer_data)

        if not customer_serializer.is_valid():
            return Response(
                customer_serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        customer = customer_serializer.save()

        service_request_data = {
            "customer": customer.id,
            "service": data.get("service"),
            "description": data.get("description"),
            "preferred_date": data.get("preferred_date"),
        }

        service_request_serializer = ServiceRequestSerializer(
            data=service_request_data
        )

        if not service_request_serializer.is_valid():
            customer.delete()

            return Response(
                service_request_serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        service_request = service_request_serializer.save()

        # Send email notifications
        try:
            send_service_request_received_email(service_request)
        except Exception as error:
            print(f"Email notification failed: {error}")

        return Response(
            ServiceRequestSerializer(service_request).data,
            status=status.HTTP_201_CREATED,
        )