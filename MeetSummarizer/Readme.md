<img src = "https://github.com/Tejas1510/MOM/blob/main/Images_MOM/DR.jpeg"></img>
# Django Project Setup/Run Details
1. Install django by writing below command in terminal
```
pip install django
```
2. Make a folder and write 
```
django-admin startproject <project_name>
```
3. To check django version : 
```
python -m django --version
```
4. Go to your project directory and then type: 
```
python manage.py runserver
```

5. Make an app for making our project functional:
```
python manage.py startapp <app_name>
```
  
6. To make some migartions in database use commands(in sequence):
```
python manage.py makemigrations
python manage.py migrate
```

7. To create Admin:
```
python manage.py createsuperuser
```
8. Install libraries:
```
pip install django-cors-headers
pip install djangorestframework
pip install djangorestframework-jwt-1.11.0 ( If this dosen't work then run pip install djangorestframework-jwt)
```
   username: Project2021
   password: Project@2021
