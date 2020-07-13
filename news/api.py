from datetime import datetime, timedelta
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Article, Feed
#from .pagination import LinkHeaderPagination
from .serializers import ArticleSerializer

class ArticlesList(generics.ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()