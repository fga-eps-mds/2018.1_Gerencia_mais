from rest_framework import serializers
from doctor.models import Doctors

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = '__all__'

class DoctorCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = [
            'name',
            'status',
            'registration',
            'CPF'
            ]

class DoctorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = [
            'id',
            'name',
            'status',
            'registration',
            'CPF'
        ]
