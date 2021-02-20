from django.shortcuts import render,HttpResponse,redirect
import json
from django.http import JsonResponse
import wikipedia

# Create your views here.
def index(request):
    return render(request,'home.html')


def get_wiki_summary(request):
    topic = request.GET.get('topic', None)

    print('topic:', topic)

    data = {
        'summary': wikipedia.summary(topic, sentences=1),
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)