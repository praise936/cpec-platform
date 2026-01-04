# backend/events/views.py

from rest_framework import viewsets, permissions
from .models import Event
from .serializers import EventSerializer
from accounts.permissions import IsAdmin
from core.permissions import ReadOnlyOrAdmin

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdmin()]
        return [permissions.AllowAny()]



