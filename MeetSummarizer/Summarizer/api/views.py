# from rest_framework.generics import ListAPIView, RetrieveAPIView
# from rest_framework.views import APIView
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from Summarizer.models import MeetContent
from .serializers import MeetContentSerializer
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

# Social Login Imports
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

# Google Login API View
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:8000/api/rest-auth/google/callback/"
    client_class = OAuth2Client

# class MeetContentListView(ListAPIView):
#     queryset = MeetContent.objects.all()
#     serializer_class = MeetContentSerializer

# class MeetContentDetailView(RetrieveAPIView):
#     queryset = MeetContent.objects.all()
#     serializer_class = MeetContentSerializer

@api_view(['GET'])
def apiOverview(request):
    meets = MeetContent.objects.all()
    serializer = MeetContentSerializer(meets, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postMeetContent(request):
    serializer = MeetContentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
