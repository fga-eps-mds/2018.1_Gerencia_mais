from rest_framework import serializers
from subtitle.models import Subtitles


class SubtitlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = '__all__'


class SubtitlesCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = [
            'code',
            'begin',
            'finish',
            'description',
        ]


class SubtitlesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = [
            'code',
            'begin',
            'finish',
            'description',
        ]
