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
    lookup_field = 'registration'

class EventUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'registration'

# @api_view(['GET','POST'])
# def event_list(request):
#     "Get all event's list."
#     if request.method == "GET":
#         events = Event.objects.all()
#         serializer = EventSerializer(events, many=True)
#         return Response(serializer.data)
#
#     elif request.method == "POST":
#         serializer = EventSerializer(data= request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
