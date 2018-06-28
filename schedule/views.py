import datetime
import requests
import json
from schedule.models import Calendar, Event

from .serializer import CalendarSerializer, EventSerializer

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import (
    AllowAny,IsAuthenticated
)
from django.http import HttpResponse


class ListCalendar(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class ListEvent(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    # permission_classes = (permissions.IsAdminUser,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetailAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'
    def delete(self, request):
        event = self.get_object()
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EventDoctorListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('doctor','start','end')
    search_fields = ('=doctor','=start','=end')



class EventUpdateAPIView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'


def generate_pdf(request,month):# pragma: no cover
    events = Event.objects.all();
    doctors = []
    for event in events:
        if event.is_this_month(int(month)):
            inicio_fim = str(event.start.hour) + '-' + str(event.end.hour)
            aux = {'Nome': event.doctor.name, 'Registro': event.doctor.registration, 'Categoria': event.doctor.category, 'Horário':inicio_fim}
            doctors.append(aux)
    data = json.dumps(doctors)
    req = requests.post('https://gerencia-report.herokuapp.com/report/all_doctors',str(data))
    response = HttpResponse(content_type = 'application/pdf')
    response['Content-Disposition'] = 'inline;filename=all_doctors.pdf'
    response.write(req.text)
    return response

def generate_xlsx(request,month):# pragma: no cover
    events = Event.objects.all();
    doctors = []
    for event in events:
        if event.is_this_month(int(month)):
            inicio_fim = str(event.start.hour) + '-' + str(event.end.hour)
            aux = {'Nome': event.doctor.name, 'Registro': event.doctor.registration, 'Categoria': event.doctor.category, 'Horário':inicio_fim}
            doctors.append(aux)
    data = json.dumps(doctors)
    req = requests.post('https://gerencia-report.herokuapp.com/report/xsml_all_doctors',str(data))
    response = HttpResponse(content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    response['Content-Disposition'] = "attachment; filename=Relatorio.xlsx"
    response.write(req.content)
    return response
