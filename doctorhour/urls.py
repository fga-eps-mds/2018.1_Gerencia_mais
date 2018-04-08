from django.conf.urls import include, url
from rest_framework.urlpatterns import format_suffix_patterns
from doctorhour import views
urlpatterns =[
        url(r'^api/(?P<pk>[0-9]+)/$',views.DoctorDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
