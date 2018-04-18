from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView
from schedule.models import Calendar
from schedule.periods import Day, Month, Week, Year
from rest_framework import generics
from schedule.views import (
    ListCalendar,
    ListEvent,
    ListRule,
)

urlpatterns = [
    # API serializers
    path('api-calendar/',ListCalendar.as_view()),
    path('api-event/', ListEvent.as_view()),
    path('api-rule/', ListRule.as_view()),
]
