from django.db import models
from django.conf import settings

class Event(models.Model):
    ONLINE = 'online'
    PHYSICAL = 'physical'

    MODE_CHOICES = [
        (ONLINE, 'Online'),
        (PHYSICAL, 'Physical'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    mode = models.CharField(max_length=10, choices=MODE_CHOICES)
    location = models.CharField(max_length=255, blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
