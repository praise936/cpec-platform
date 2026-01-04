from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from django.http import FileResponse
from .models import Certificate
from .utils import generate_certificate
from django.shortcuts import get_object_or_404

# ------------------------------
# 1️⃣ Admin issues a certificate
# ------------------------------
@api_view(["POST"])
@permission_classes([IsAdminUser])
def issue_certificate(request):
    """
    Admin can issue a certificate to any user.
    Expects: user (id), user_name, title
    Returns: certificate download URL
    """
    user_id = request.data.get("user")
    title = request.data.get("title")
    user_name = request.data.get("user_name")

    # Validation
    if not user_id or not title or not user_name:
        return Response({"error": "Missing required fields"}, status=400)

    # Generate PDF
    filename = f"{user_name}_{title}.pdf"
    pdf_path = generate_certificate(user_name, title, filename)

    # Save to database
    cert = Certificate.objects.create(
        user_id=user_id,
        title=title,
        pdf=pdf_path
    )

    # Return download URL
    pdf_url = request.build_absolute_uri(cert.pdf.url)
    return Response({"message": "Certificate issued", "pdf_url": pdf_url})


# ------------------------------
# 2️⃣ Member downloads their own certificate
# ------------------------------
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_certificate(request, certificate_id):
    """
    Member can download their own certificate.
    """
    cert = get_object_or_404(Certificate, id=certificate_id, user=request.user)
    return FileResponse(cert.pdf.open(), as_attachment=True, filename=cert.pdf.name)
