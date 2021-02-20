from django.urls import path
from .views import apiOverview, postMeetContent

urlpatterns = [
    path('apiOverview',apiOverview),
    path('apiCreate',postMeetContent),
    # path('',MeetContentListView.as_view()),
    # path('<pk>',MeetContentDetailView.as_view())
]