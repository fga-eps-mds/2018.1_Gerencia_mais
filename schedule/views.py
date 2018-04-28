import datetime

from schedule.models import Calendar, Event, Occurrence, Rule

from .serializer import CalendarSerializer, EventSerializer, RuleSerializer

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



class ListCalendar(generics.ListCreateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class ListEvent(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ListRule(generics.ListCreateAPIView):
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer

@api_view(['GET','POST'])
def event_list(request):
    "Get all event's list."
    if request.method == "GET":
        is105_Integrar_tabelas_de_quadros_de_horarios
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = EventSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
