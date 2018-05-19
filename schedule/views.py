import datetime

from schedule.models import Calendar, Event, Occurrence, Rule

from .serializer import CalendarSerializer, EventSerializer, RuleSerializer

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import (
    AllowAny,IsAuthenticated
)



class ListCalendar(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class ListEvent(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    # permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ListRule(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer



class EventDetailAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'

class EventDoctorListAPIView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('doctor',)
    search_fields = ('=doctor',)



class EventUpdateAPIView(generics.RetrieveUpdateAPIView):
    permission_classes = [AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'
