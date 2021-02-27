from django.contrib.auth.forms import UserCreationForm
from .models import User
from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model


class CustomUserCreationForm (UserCreationForm):
    email = forms.EmailField ( label = 'Enter email' )
    password1 = forms.CharField ( label = 'Enter password' , widget = forms.PasswordInput )
    password2 = forms.CharField ( label = 'Confirm password' , widget = forms.PasswordInput )
    class Meta:
        model = User
        fields = ("email","password1","password2")
    def clean_email(self):
        email = self.cleaned_data['email']
        r = User.objects.filter ( email = email )
        if r.count ():
            raise ValidationError ( "Email already exists" )
        return email

    def clean_password2(self):
        password1 = self.cleaned_data.get ( 'password1' )
        password2 = self.cleaned_data.get ( 'password2' )

        if password1 and password2 and password1 != password2:
            raise ValidationError ( "Password don't match" )

        return password2

    def save(self , commit=True):
        
        user = User.objects.create_user (
            self.cleaned_data['email'] ,
            self.cleaned_data['password1']
        )
        return user