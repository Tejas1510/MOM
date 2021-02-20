from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('Summarizer.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('Summarizer.api.urls'))
]
