from django.shortcuts import render
from doctorhour.models import Doctor
from rest_framework import generics
from doctorhour.serializers import DoctorHourSerializer
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status, generics
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class DoctorList(APIView):
    def get(self,request,format=None):
        doctors = Doctor.objects.all()
        serializer - DoctorHourSerializer(doctors, many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        serializer = DoctorHourSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['POST','GET'])
def doctor_list(request,format=None):
    if request.method == 'GET':
        doctors = Doctor.objects.all()
        serializer = DoctorHourSerializer(doctors,many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DoctorHourSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def doctor_detail(request,pk,format=None):
    try:
        doctor = Doctor.objects.get(pk=pk)
    except Doctor.DoesNotExist :
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = DoctorHourSerializer(doctor)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = DoctorHourSerializer(doctor, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif resquest.method == 'DELETE':
        doctor.delete()
        return HttpResponse(status=204)
