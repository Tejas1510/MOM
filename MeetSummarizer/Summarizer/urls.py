from django.contrib import admin
from django.urls import path
from Summarizer import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path("", views.index,name='home'),
    path('token-auth/', obtain_jwt_token),
    path('login/', views.user_login, name="user_login"),
    path('logout/', views.user_logout, name="user_logout"),
    path('user_register',views.userRegister, name="user_register")
]
