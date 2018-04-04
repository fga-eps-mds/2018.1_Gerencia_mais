from django.shortcuts import render
from doctorhour.models import Doctor
from rest_framework import generics
from doctorhour.serializers import DoctorHourSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status, generics

def post_doctors(request):
    return  render(request, 'DoctorForm.html', {'id': doctor_id})

class ShowDoctors(generics.ListCreateAPIView):
    def get(self,request,format = None):
        doctors = Doctor.objects.all().order_by('-date')
        serializer = DoctorHourSerializer(doctors, many=True)
        return Response(serializer.data)

    @permission_classes ((IsAdminUser,))
    def post(self, request, format=None):
        user = request.user
        serializer = DoctorHourSerializer(data=request.data, context={'user':user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorHourSerializer
