from rest_framework import serializers

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username',
                  'password',
                  'email',
        ]

class UserCreateUpdateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
    style={'input_type': 'password'}
    )
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',

        ]
