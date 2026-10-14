from django.conf import settings
from django.core.mail import send_mail


def send_service_request_received_email(service_request):
    customer = service_request.customer

    subject = f"Service Request Received - {service_request.request_id}"

    customer_message = f"""
Hello {customer.name},

Thank you for contacting us.

Your service request has been received successfully.

Request ID: {service_request.request_id}
Service: {service_request.service}
Property: {customer.property_name or "Not provided"}
Location: {customer.location or "Not provided"}

Our team is reviewing your request and will notify you once a technician has been assigned.

Please keep your request ID for reference.

Regards,
Property Technical Services
"""

    company_message = f"""
New Service Request Received

Request ID: {service_request.request_id}

Customer: {customer.name}
Phone: {customer.phone}
Email: {customer.email or "Not provided"}

Property: {customer.property_name or "Not provided"}
Location: {customer.location or "Not provided"}

Service: {service_request.service}

Preferred Date: {
    service_request.preferred_date
    or "Not specified"
}

Description:
{service_request.description}
"""

    # Send notification to customer if an email was provided
    if customer.email:
        send_mail(
            subject=subject,
            message=customer_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[customer.email],
            fail_silently=False,
        )

    # Send notification to company
    company_email = settings.DEFAULT_FROM_EMAIL

    send_mail(
        subject=f"New Service Request - {service_request.request_id}",
        message=company_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[company_email],
        fail_silently=False,
    )