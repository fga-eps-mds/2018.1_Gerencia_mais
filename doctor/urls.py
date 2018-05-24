from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from doctor.views import (
        ListDoctor,
        ListDetailDoctor,
        CreateDoctorAPI,
        UpdateDoctorAPI,
        ListDoctorCategory,
)

urlpatterns = [
    # API serializers
    url(r'^api-doctor/create/$',CreateDoctorAPI.as_view(),name = "create-admin"),
    url(r'^api-doctor/update/(?P<registration>[\w-]+)/$',UpdateDoctorAPI.as_view(), name="admin-update"),
    url(r'^api-doctor/(?P<name>[\w-]+)/$',ListDetailDoctor.as_view(),name="admin-detail-list"),
    url(r'^api-doctor/$',ListDoctor.as_view(),name = "admin-list"),
    url(r'^api-doctor/list/(?P<category>[\w-]+)/$',ListDoctorCategory.as_view(),name="admin-category-list")
]

urlpatterns = format_suffix_patterns(urlpatterns)
