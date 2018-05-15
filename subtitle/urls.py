from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from subtitle.views import (
        ListSubtitles,
        ListDetailSubtitles,
        CreateSubtitles,
        UpdateSubtitlesAPI,
)




urlpatterns = [
    # API serializers
    url(r'^api-subtitle/create/$', CreateSubtitles.as_view(), name = "create-subtitle"),
    url(r'^api-subtitle/update/(?P<code>[\w-]+)/$', UpdateSubtitlesAPI.as_view(), name="subtitle-update"),
    url(r'^api-subtitle/(?P<code>[\w-]+)/$', ListDetailSubtitles.as_view(), name="subtitle-detail-list"),
    url(r'^api-subtitle/$', ListSubtitles.as_view(), name = "subtitle-list"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
