from django.contrib import admin
from django.urls import path
from Summarizer import views
from django.conf.urls import url

urlpatterns = [
    path("", views.index,name='home'),
    url(r'^get_wiki_summary/$', views.get_wiki_summary, name='get_wiki_summary'),
]
