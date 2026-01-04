# backend/programs/views.py

from rest_framework import viewsets, permissions
from .models import Program
from .serializers import ProgramSerializer
from accounts.permissions import IsAdmin
from core.permissions import ReadOnlyOrAdmin

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdmin()]
        return [permissions.AllowAny()]
