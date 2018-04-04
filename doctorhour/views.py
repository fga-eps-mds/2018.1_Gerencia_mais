from django.shortcuts import render
from doctorhour.models import Doctor
from rest_framework import generics
from doctorhour.serializers import DoctorHourSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status, generics
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

def doctor_list(request):
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

def doctor_detail(request,pk):
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
