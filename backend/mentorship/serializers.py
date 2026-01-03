from rest_framework import serializers
from .models import MentorProfile, MentorshipRequest

class MentorProfileSerializer(serializers.ModelSerializer):
    user_email = serializers.CharField(source="user.email", read_only=True)

    class Meta:
        model = MentorProfile
        fields = "__all__"


class MentorshipRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorshipRequest
        fields = "__all__"
