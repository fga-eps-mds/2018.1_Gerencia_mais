from django.conf.urls import url
from django.urls import path
from django.views.generic.list import ListView

from rest_framework import generics
from rest_framework.urlpatterns import format_suffix_patterns

from administrator import views
from administrator.views import (
        ListAdministrator,
        ListDetailAdministrator,
        CreateAdministratorAPI,
        UpdateAdministratorAPI,
)




urlpatterns = [
    # API serializers
    url(r'^api-admin/create/$',CreateAdministratorAPI.as_view(),name = "create-admin"),
    url(r'^api-admin/update/(?P<name>[\w-]+)/$',UpdateAdministratorAPI.as_view(), name="admin-update"),
    url(r'^api-admin/(?P<name>[\w-]+)/$',ListDetailAdministrator.as_view(),name="admin-detail-list"),
    url(r'^api-admin/$',ListAdministrator.as_view(),name = "admin-list"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
