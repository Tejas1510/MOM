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
from datetime import datetime
from Summarizer.api.translateUtility import translate_utility
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from Summarizer.api.t5_model import main_t5

def preProcessing(text):
  sample=text.split('**')
  sample.pop(0);
  clean_text=""
  print(sample)
  i=0
  for t in sample:
    if i%2!=0:
      clean_text+=str(t)
    i+=1
    
  # Duration Calculation
  startTime = datetime.strptime(sample[0].split()[0], '%H:%M')
  endTime = datetime.strptime(sample[-2].split()[0], '%H:%M')
  durationMinutes = (endTime - startTime).total_seconds() / 60
  if durationMinutes < 0:
    durationMinutes += 24*60
  durationMinutes = round(durationMinutes)
  
  return {'clean_text': clean_text, 'duration': durationMinutes}


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
    #Uncomment Below Code to Programatically create meet content data for testing
    # for i in range(1,16):
    #     newMeet = MeetContent(owner='tejas@gmail.com', hostname='Tejas', title='Tejas Meet ' + str(i), duration=str(i*10), transcript='Meet Transcript ' + str(i), summary='Meet Summary ' + str(i))
    #     newMeet.save()
    #     newMeet = MeetContent(owner='ak@gmail.com', hostname='Ayush', title='Ayush Meet ' + str(i), duration=str(i*10), transcript='Meet Transcript ' + str(i), summary='Meet Summary ' + str(i))
    #     newMeet.save()
    #     print("newMeet: ", str(newMeet))
    meets = MeetContent.objects.all()
    serializer = MeetContentSerializer(meets, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createMeet(request):
    try:
        receivedData = dict(request.data)
        modifiedData = preProcessing(receivedData['transcript'])
        receivedData['transcript'] = modifiedData['clean_text']
        receivedData['duration'] = str(modifiedData['duration'])
    except:
        receivedData = dict(request.data)
        
    serializer = MeetContentSerializer(data=receivedData)
    if serializer.is_valid():
        serializer.save()
        print("Meet Saved in Database")
    return Response(serializer.data)

@permission_classes([AllowAny])
@api_view(['POST'])
def translateText(request):
    input_text = str(request.data['input_text'])
    inp_lang = str(request.data['inp_lang'])
    op_lang = str(request.data['op_lang'])
    op_text = translate_utility(input_text, inp_lang, op_lang)
    return Response({'op_text': op_text})


@permission_classes([AllowAny])
@api_view(['POST'])
def nltkSummarizer(request):
    input_text = str(request.data['input_text'])
    op_text = main_nltk(input_text)
    return Response({'op_text': op_text})


@permission_classes([AllowAny])
@api_view(['POST'])
def t5Summarizer(request):
    try:
        input_text = str(request.data['input_text'])
        op_text = main_t5(input_text)
        return Response({'op_text': op_text})
    except Exception as e:
        return Response({'op_text': str(e)})
    