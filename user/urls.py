from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.urlpatterns import format_suffix_patterns
from user.views import ListUser, CreateUserAPI


urlpatterns = [
    url(r'^obtain-auth-token/$', obtain_auth_token,name='obtain_auth_token'),
    url(r'^api-user/$',ListUser.as_view(),name = "user-list"),
    url(r'^api-user/create/$',CreateUserAPI.as_view(),name = "create-user"),
    ]
