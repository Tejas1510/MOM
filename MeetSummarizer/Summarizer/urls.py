from django.contrib import admin
from django.urls import path
from Summarizer import views

urlpatterns = [
    path("", views.index,name='home'),
  
]
