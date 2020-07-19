from django.conf.urls import url, include
from .views import current_user, UserList

urlpatterns = [
    url(r'^current_user/', current_user),
    url(r'^users/', UserList.as_view())
]