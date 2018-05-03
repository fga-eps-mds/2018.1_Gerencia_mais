from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView

from rest_framework import generics
from rest_framework.urlpatterns import format_suffix_patterns

from schedule.models import Calendar
from schedule.periods import Day, Month, Week, Year
from schedule import views
from schedule.views import (
    ListCalendar,
    ListEvent,
    ListRule,
    EventDetailAPIView,
    EventUpdateAPIView,
)

urlpatterns = [
    # API serializers
    url(r'^api-event/(?P<doctor>[\w-]+)/$', EventDetailAPIView.as_view(),name='detail'),
    url(r'^api-event/update/(?P<doctor>[\w-]+)/$', EventUpdateAPIView.as_view(),name='update'),
    path('api-calendar/',ListCalendar.as_view()),
    path('api-event/', ListEvent.as_view()),
    path('api-rule/', ListRule.as_view()),
    # path('gp-list/', views.event_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
