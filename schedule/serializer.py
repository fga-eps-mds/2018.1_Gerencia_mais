from rest_framework import serializers
from schedule.models.calendars import Calendar

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = '__all__'
