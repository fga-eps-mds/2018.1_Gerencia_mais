from rest_framework import serializers
from administrator.models import Administrator

class AdministratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrator
        fields = '__all__'

class AdministratorCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrator
        fields = [
            'name',
            'email',
            'adress',
            'password',
            'phone',
            'key',
        ]

class AdministratorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrator
        fields = [
            'name',
            'email',
            'adress',
            'password',
            'phone',
        ]
