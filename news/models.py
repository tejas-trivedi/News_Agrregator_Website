from django.db import models
from django.template.defaultfilters import truncatewords_html
from time import mktime
import datetime, feedparser

# Create your models here.
class Article(models.Model):
    #feed = models.ForeignKey(Feed)
    title = models.CharField(max_length=200)
    url = models.URLField(verbose_name="URL")
    description = models.TextField()
    description_truncated = models.TextField(blank=True, null=True)
    publication_date = models.DateTimeField()

    def __str__(self):
        return self.title
