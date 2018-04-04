from django.conf.urls import include, url
from rest_framework.urlpatterns import format_suffix_patterns
from doctorhour import views
from .models import Doctor
urlpatterns =[
        url(r'^serializer/$', views.doctor_list),
        url(r'^serializer/(?P<pk>[0-9]+)/$', views.doctor_detail),
]
urlpatterns = format_suffix_patterns(urlpatterns)
