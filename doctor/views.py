from doctor.models import Doctors
from doctor.serializer import (
    DoctorSerializer,
    DoctorCreateUpdateSerializer,
    DoctorListSerializer
    )

from rest_framework import generics
from rest_framework.permissions import(
    AllowAny,
)


class ListDoctor(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Doctors.objects.all()
    serializer_class = DoctorListSerializer

class CreateDoctorAPI(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Doctors.objects.all()
    serializer_class = DoctorCreateUpdateSerializer

class ListDetailDoctor(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Doctors.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'name'

class UpdateDoctorAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [AllowAny]
    queryset = Doctors.objects.all()
    serializer_class = DoctorCreateUpdateSerializer
    lookup_field = 'registration'

class ListDoctorCategory(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Doctors.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'category'
