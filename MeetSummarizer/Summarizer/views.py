from django.shortcuts import render,HttpResponse,redirect

# Create your views here.
def index(request):
    return render(request,'home.html')

