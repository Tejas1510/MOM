from django.shortcuts import render,HttpResponse,redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control

# Create your views here.
def index(request):
    return render(request,'home.html')

def user_login(request):
    if request.method == "POST":
        email = request.POST.get('email','')
        password = request.POST.get('password','')
        user = authenticate(email=email, password=password)
        print('USER: ', str(user),"Email: ",email, "password: ", password)
        if user is not None and user.is_active:
            # Login Successfull
            login(request, user)
            return redirect('home')
        else:
            # Login Unsuccessfull , Show Same Page With Error
            return render(request, 'login.html', {'loginStatus':"Incorrect Credentials."})
    else:
        if request.user.is_authenticated:
            # If user is already logged in, send to home
            return redirect('home')
        # Display Login Page
        return render(request,'login.html', {'loginStatus':'OK'})


def user_logout(request):
    if not request.user.is_authenticated:
        # If the user is not logged in , send to home
        return render(request, 'logout.html')
        #return redirect('home')
    logout(request)
    return render(request, 'logout.html')


def userRegister(request):
    return render(request,'clientRegistration.html')
