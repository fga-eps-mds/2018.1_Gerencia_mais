from django.shortcuts import render

from administrator.models import Administrator
from administrator.serializer import (
    AdministratorSerializer,
    AdministratorCreateUpdateSerializer,
    AdministratorListSerializer
    )

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)


class ListAdministrator(generics.ListCreateAPIView):
    permission_classes = [AllowAny, IsAdminUser]
    queryset = Administrator.objects.all()
    serializer_class = AdministratorListSerializer

class CreateAdministratorAPI(generics.CreateAPIView):
    permission_classes = [AllowAny, IsAdminUser]
    queryset = Administrator.objects.all()
    serializer_class = AdministratorCreateUpdateSerializer

class ListDetailAdministrator(generics.RetrieveAPIView):
    permission_classes = [AllowAny, IsAdminUser]
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer
    lookup_field = 'name'

class UpdateAdministratorAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [AllowAny, IsAdminUser]
    queryset = Administrator.objects.all()
    serializer_class = AdministratorCreateUpdateSerializer
    lookup_field = 'name'

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
