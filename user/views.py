from django.shortcuts import render
from rest_framework import viewsets, response, permissions
from django.contrib.auth.models import User
from user.serializers import UserSerializer, UserCreateUpdateSerializer
from rest_framework import generics
from rest_framework.permissions import (
    AllowAny,
)
# Create your views here.
class UserViewVSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)


class ListUser(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserAPI(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserCreateUpdateSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()
