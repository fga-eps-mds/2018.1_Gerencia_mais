from django.conf.urls import url,include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView

from schedule import urls
from subtitle import urls as url2

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
    path('schedule/',include('schedule.urls')),
    url(r'^(?P<username>[\w.@+-]+)/$', TemplateView.as_view(template_name="index.html")),
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    re_path(r'^(?P<username>[\w.@+-]+)/$', TemplateView.as_view(template_name='index.html')),
    re_path(r'^$', TemplateView.as_view(template_name="index.html")),
    path('doctor/',include('doctor.urls')),
    path('subtitle/', include('subtitle.urls')),
    path('user/',include('user.urls')),

]
