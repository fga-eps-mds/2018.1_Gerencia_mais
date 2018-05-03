import datetime

from schedule.models import Calendar, Event, Occurrence, Rule

from .serializer import CalendarSerializer, EventSerializer, RuleSerializer

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions



class ListCalendar(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class ListEvent(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    # permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ListRule(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer

class EventDetailAPIView(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'doctor'

class EventUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'doctor'
