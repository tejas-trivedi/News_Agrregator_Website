from django.conf.urls import url
from . import views
from .api import ArticlesList

urlpatterns = [
    url(r'^articles/$', views.articles_list, name='articles-list'),
    url(r'^feeds/$', views.feeds_list, name='feeds-list'),
    url(r'^feeds/new/$', views.new_feed, name='new-feed'),
    
    url(r'^api/', ArticlesList.as_view()),
]
