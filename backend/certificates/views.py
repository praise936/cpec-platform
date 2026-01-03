from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Certificate
from .utils import generate_certificate

@api_view(["POST"])
@permission_classes([IsAdminUser])
def issue_certificate(request):
    user = request.data["user"]
    title = request.data["title"]

    filename = f"{user}_{title}.pdf"
    pdf_path = generate_certificate(
        request.data["user_name"],
        title,
        filename
    )

    cert = Certificate.objects.create(
        user_id=user,
        title=title,
        pdf=pdf_path
    )

    return Response({"message": "Certificate issued"})
