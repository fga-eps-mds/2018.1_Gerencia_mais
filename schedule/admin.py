from django.contrib import admin
from schedule.models import Calendar, CalendarRelation, Event

admin.site.register(Calendar)
admin.site.register(CalendarRelation)
admin.site.register(Event)
