from rest_framework.routers import DefaultRouter
from .views import MentorProfileViewSet, MentorshipRequestViewSet

router = DefaultRouter()
router.register("mentors", MentorProfileViewSet)
router.register("requests", MentorshipRequestViewSet)

urlpatterns = router.urls
