from django.conf.urls import url
from . import views
from .api import ArticlesList, FeedList, NewFeed

urlpatterns = [
    url(r'^articles/$', views.articles_list, name='articles-list'),
    url(r'^feeds/$', views.feeds_list, name='feeds-list'),
    url(r'^feeds/new/$', views.new_feed, name='new-feed'),
    url(r'^feeds/(?P<feed_id>[0-9]+)/$', views.articles_list, name='feed-articles'),

    
    url(r'^api/article/', ArticlesList.as_view()),
    url(r'^api/feeds/', FeedList.as_view()),
    url(r'^api/feed/new/', NewFeed.as_view()),
    
]
