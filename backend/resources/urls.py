from rest_framework.routers import DefaultRouter
from .views import ResourceViewSet

router = DefaultRouter()
router.register('', ResourceViewSet)

urlpatterns = router.urls
