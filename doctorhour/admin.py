from django.contrib import admin
from doctorhour.models import Doctor,DaysHour,WeekHour,MonthHour
admin.site.register(Doctor)
admin.site.register(DaysHour)
admin.site.register(WeekHour)
admin.site.register(MonthHour)

# Register your models here.
