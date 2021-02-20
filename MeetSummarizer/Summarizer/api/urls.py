from django.urls import path
from .views import apiOverview, postMeetContent, GoogleLogin

urlpatterns = [
    path('apiOverview',apiOverview),
    path('apiCreate',postMeetContent),
    # Social Login URLs
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login')
    # path('',MeetContentListView.as_view()),
    # path('<pk>',MeetContentDetailView.as_view())
]