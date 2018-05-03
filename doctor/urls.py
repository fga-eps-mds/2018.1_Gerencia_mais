from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView

from rest_framework import generics
from rest_framework.urlpatterns import format_suffix_patterns

from doctor.views import (
        ListDoctor,
        ListDetailDoctor,
        CreateDoctorAPI,
        UpdateDoctorAPI,
)

urlpatterns = [
    # API serializers
    url(r'^api-doctor/create/$',CreateDoctorAPI.as_view(),name = "create-admin"),
    url(r'^api-doctor/update/(?P<name>[\w-]+)/$',UpdateDoctorAPI.as_view(), name="admin-update"),
    url(r'^api-doctor/(?P<name>[\w-]+)/$',ListDetailDoctor.as_view(),name="admin-detail-list"),
    url(r'^api-doctor/$',ListDoctor.as_view(),name = "admin-list"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
