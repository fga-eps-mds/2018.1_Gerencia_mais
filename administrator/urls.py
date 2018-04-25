from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView

from rest_framework import generics
from rest_framework.urlpatterns import format_suffix_patterns

from administrator import views




urlpatterns = [
    # API serializers
    path('gp-admin-list/', views.administrator_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
