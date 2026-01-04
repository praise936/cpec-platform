from rest_framework import viewsets, permissions
from .models import Resource
from .serializers import ResourceSerializer
from accounts.permissions import IsAdmin
from core.permissions import ReadOnlyOrAdmin

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all().order_by('-created_at')
    serializer_class = ResourceSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdmin()]
        return [permissions.AllowAny()]
