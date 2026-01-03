from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/programs/', include('programs.urls')),
    path('api/events/', include('events.urls')),
    path("api/mentorship/", include("mentorship.urls")),
    path("api/certificates/", include("certificates.urls")),
]
