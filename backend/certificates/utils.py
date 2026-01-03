from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import os
from django.conf import settings

def generate_certificate(user_name, title, filename):
    file_path = os.path.join(settings.MEDIA_ROOT, "certificates", filename)
    c = canvas.Canvas(file_path, pagesize=A4)

    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(300, 750, "ChemProcess Engineers Connect")

    c.setFont("Helvetica", 16)
    c.drawCentredString(300, 680, "Certificate of Completion")

    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(300, 620, user_name)

    c.setFont("Helvetica", 14)
    c.drawCentredString(300, 580, f"For successfully completing")

    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(300, 550, title)

    c.showPage()
    c.save()

    return f"certificates/{filename}"
