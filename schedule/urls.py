from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView

from rest_framework import generics
from rest_framework.urlpatterns import format_suffix_patterns

from schedule.models import Calendar
from schedule import views
from schedule.views import (
    ListCalendar,
    ListEvent,
    EventDetailAPIView,
    EventUpdateAPIView,
    EventDoctorListAPIView,
)

urlpatterns = [
    # API serializers
    url(r'^api-event/list-doctor/$',EventDoctorListAPIView.as_view(),name='doctor-view'),
    url(r'^api-event/(?P<id>[\w-]+)/$', EventDetailAPIView.as_view(),name='detail'),
    url(r'^api-event/update/(?P<id>[\w-]+)/$', EventUpdateAPIView.as_view(),name='update'),
    path('api-calendar/',ListCalendar.as_view()),
    path('api-event/', ListEvent.as_view()),
    url(r'^api-event/delete/(?P<id>[\w-]+)/$', EventDetailAPIView.as_view(),name='delete'),
    url(r'^generate-pdf/(?P<month>[\w-]+)/$',views.generate_pdf,name='generate_pdf'),
    url(r'^generate-xlsx/(?P<month>[\w-]+)/$',views.generate_xlsx,name='generate_xlsx'),
    # path('gp-list/', views.event_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
