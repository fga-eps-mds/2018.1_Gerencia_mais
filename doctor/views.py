from django.shortcuts import render

from doctor.models import Doctors
from doctor.serializer import (
    DoctorSerializer,
    DoctorCreateUpdateSerializer,
    DoctorListSerializer
    )

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
)


class ListDoctor(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Doctors.objects.all()
    serializer_class = DoctorListSerializer

class CreateDoctorAPI(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Doctors.objects.all()
    serializer_class = DoctorCreateUpdateSerializer

class ListDetailDoctor(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Doctors.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'name'

class UpdateDoctorAPI(generics.UpdateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Doctors.objects.all()
    serializer_class = DoctorCreateUpdateSerializer
    lookup_field = 'name'
