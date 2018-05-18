from django.conf.urls import url,include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView

from chatterbot.ext.django_chatterbot import urls
from schedule import urls
from administrator import urls as url1

var_code = urls
print(urls)

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
<<<<<<< HEAD
    url(r'^api/chatterbot/', include('chatterbot.ext.django_chatterbot.urls')),
=======
    path('user/',include('user.urls')),
>>>>>>> 2cfb389f480a45c69cf5e4acf10ce22259cd4bcc
]
