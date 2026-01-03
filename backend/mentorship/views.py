from rest_framework import viewsets, permissions
from .models import MentorProfile, MentorshipRequest
from .serializers import MentorProfileSerializer, MentorshipRequestSerializer
from accounts.permissions import IsAdmin

class MentorProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MentorProfile.objects.filter(available=True)
    serializer_class = MentorProfileSerializer
    permission_classes = [permissions.AllowAny]


class MentorshipRequestViewSet(viewsets.ModelViewSet):
    queryset = MentorshipRequest.objects.all()
    serializer_class = MentorshipRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.action in ["update", "partial_update"]:
            return [IsAdmin()]
        return super().get_permissions()
