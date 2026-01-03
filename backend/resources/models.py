from django.db import models
from django.conf import settings
from django.utils import timezone
class Resource(models.Model):
    PDF = 'pdf'
    VIDEO = 'video'
    LINK = 'link'

    TYPE_CHOICES = [
        (PDF, 'PDF'),
        (VIDEO, 'Video'),
        (LINK, 'Link'),
    ]

    title = models.CharField(max_length=200)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    file = models.FileField(upload_to='resources/', blank=True, null=True)
    url = models.CharField(max_length=255, blank=True, null=True) 
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
