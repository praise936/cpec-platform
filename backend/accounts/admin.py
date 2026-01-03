from django.contrib import admin
from .models import User, Profile 
from programs.models import Program
from events.models import Event
from resources.models import Resource
from mentorship.models import MentorshipRequest


admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Program)
admin.site.register(Event)
admin.site.register(Resource)
admin.site.register(MentorshipRequest)