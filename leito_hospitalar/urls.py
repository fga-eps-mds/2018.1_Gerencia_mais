from django.conf.urls import url,include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView

from schedule import urls
from administrator import urls as url1

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
    path('schedule/',include('schedule.urls')),
    url(r'^(?P<username>[\w.@+-]+)/$', TemplateView.as_view(template_name="index.html")),
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    re_path(r'^(?P<username>[\w.@+-]+)/$', TemplateView.as_view(template_name='index.html')),
    re_path(r'^$', TemplateView.as_view(template_name="index.html")),
    path('administrator/',include('administrator.urls')),
    path('doctor/',include('doctor.urls')),
]
