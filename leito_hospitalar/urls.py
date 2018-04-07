


from django.conf.urls import url,include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from doctorhour import urls
from schedule import urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    path('schedule/',include('schedule.urls')),
    url(r'^(?P<username>[\w.@+-]+)/$', TemplateView.as_view(template_name="index.html")),
    path('doctor/',include('doctorhour.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
