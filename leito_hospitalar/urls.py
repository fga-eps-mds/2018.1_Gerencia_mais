


from django.conf.urls import url,include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from doctorhour import urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    path('doctor/',include('doctorhour.urls')),
    url(r'^dr$', TemplateView.as_view(template_name="DoctorForm.html")),
    url(r'^', TemplateView.as_view(template_name="index.html")),
    path('admin/', admin.site.urls),
    # path('api/', include('mynewapp.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
