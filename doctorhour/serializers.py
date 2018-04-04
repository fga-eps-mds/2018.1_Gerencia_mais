from rest_framework import serializers
from .models import Doctor

class DoctorHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__' #('Name','Workload','Category','Hospital','CPF','Registration','Status','Comment')
    name = serializers.CharField(required = True, allow_blank = True, max_length=100)
    workload = serializers.IntegerField(required=True)
    category = serializers.CharField(required = True, allow_blank = True, max_length=100)
    hospital = serializers.CharField(required = True, allow_blank = True, max_length=100)
    CPF = serializers.CharField(required = True, allow_blank = True, max_length=30)
    registration = serializers.CharField(required = True, allow_blank = True, max_length=100)
    status = serializers.BooleanField()
    comment = serializers.CharField(required = True, allow_blank = True, max_length=200)

    def create(self, validated_data):
        return Doctor.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.name = validated_data.get('Name', instance.name)
        instance.workload = validated_data.get('Workload', instance.workload)
        instance.category = validated_data.get('Category', instance.category)
        instance.hospital = validated_data.get('Hospital', instance.hospital)
        instance.CPF = validated_data.get('CPF', instance.CPF)
        instance.registration = validated_data.get('Registration',instance.registration)
        instance.status = validated_data.get('Status',instance.status)
        instance.comment = validated_data.get('Comment',instance.comment)
        instance.save()
        return instance
