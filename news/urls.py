from django.conf.urls import url
from . import views
from .api import ArticlesList, FeedList, NewFeed, ArticleDetail#, FeedArticles

urlpatterns = [
    url(r'^articles/$', views.articles_list, name='articles-list'),
    url(r'^feeds/$', views.feeds_list, name='feeds-list'),
    url(r'^feeds/new/$', views.new_feed, name='new-feed'),
    url(r'^articles_list/$', views.articles_list_view, name='articles_list_view'),
    url(r'^feeds/(?P<feed_id>[0-9]+)/$', views.articles_list, name='feed-articles'),

    # API Urls
    url(r'^api/feeds/', FeedList.as_view()),
    url(r'^api/feed/new/', NewFeed.as_view()),
    url(r'^api/article/(?P<feed_id>[0-9]+)/$', ArticlesList.as_view()),  # This is the url for particular Feed Articles
    
]
