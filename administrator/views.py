from django.shortcuts import render

from administrator.serializer import AdministratorSerializer
from administrator.models import Administrator

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['GET','POST'])
def administrator_list(request):
    "Get all administrator's list."
    if request.method == "GET":
        events = Administrator.objects.all()
        serializer = AdministratorSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = AdministratorSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
