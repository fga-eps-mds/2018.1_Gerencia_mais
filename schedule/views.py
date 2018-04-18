import datetime
from schedule.models.calendars import Calendar
from schedule.models.events import Event
from schedule.models.rules import Rule
from .serializer import CalendarSerializer, EventSerializer, RuleSerializer
from rest_framework import generics
from schedule.models import Calendar, Event, Occurrence
from schedule.periods import weekday_names


class ListCalendar(generics.ListCreateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class ListEvent(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ListRule(generics.ListCreateAPIView):
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer


def get_rest_list(request,):
    """Return Json list of all Calendars"""
    if request.method == "GET":
        rest_list = Calendar.objects.order_by('-title')
        serializer = CalendarSerializer(rest_list,many=True)
        return JsonResponse(serializer.data, safe = False)
