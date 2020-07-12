from django.contrib import admin
from django.apps import AppConfig
from .models import Article, Feed

admin.site.register(Article)
admin.site.register(Feed)

#class NewsConfig(AppConfig):
#    name = 'news'