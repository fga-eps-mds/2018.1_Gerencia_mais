from django.contrib import admin
from schedule.models import Calendar, CalendarRelation, Event, Occurrence, Rule

admin.site.register(Calendar)
admin.site.register(CalendarRelation)
admin.site.register(Event)
admin.site.register(Occurrence)
admin.site.register(Rule)
