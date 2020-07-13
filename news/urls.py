from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^articles/$', views.articles_list, name='articles-list'),
    url(r'^feeds/$', views.feeds_list, name='feeds-list'),
    url(r'^feeds/new/$', views.new_feed, name='new-feed'),
]
