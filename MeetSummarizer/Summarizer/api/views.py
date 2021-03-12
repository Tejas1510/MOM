from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from Summarizer.models import MeetContent
from .serializers import MeetContentSerializer
from Summarizer.forms import CustomUserCreationForm
from django.contrib.auth import login, authenticate, logout
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework import permissions, status
from Summarizer.models import User


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def getMeet(request):
    email = str(request.data['email'])
    print("Email: ", email)
    meets = MeetContent.objects.filter(owner=email).order_by('-date')
    serializer = MeetContentSerializer(meets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def apiOverview(request):
    # Uncomment Below Code to Programatically create meet content data for testing
    # for i in range(1,16):
    #     newMeet = MeetContent(owner='tejas@gmail.com', hostname='Tejas', title='Tejas Meet ' + str(i), duration=str(i*10), transcript='Meet Transcript ' + str(i), summary='Meet Summary ' + str(i))
    #     newMeet.save()
    #     print("newMeet: ", str(newMeet))
    meets = MeetContent.objects.all()
    serializer = MeetContentSerializer(meets, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createMeet(request):
    serializer = MeetContentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print("Meet Saved in Database")
    return Response(serializer.data)