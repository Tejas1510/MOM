from django.db import models
from django.contrib.auth.models import(
    AbstractBaseUser, BaseUserManager
)

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, name='', is_active=True, is_staff = False, is_admin=False):
        if not email:
            raise ValueError("Email is required")
        if not password:
            raise ValueError("Password is required")
        user_obj = self.model(
            email = self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        user_obj.name = name
        return user_obj

    def create_staffuser(self, email, password = None, name = ''):
        user = self.create_user(
            email = email, 
            password = password, 
            name = name,
            is_staff = True,
            is_admin= False
        ) 
        return user

    def create_superuser(self, email, password = None, name = ''):
        user = self.create_user(
            email = email, 
            password = password, 
            name = name,
            is_staff = True,
            is_admin= True
        ) 
        return user

# custom user class
class User(AbstractBaseUser):
    email = models.EmailField(max_length=100,unique=True)
    active = models.BooleanField(default=True) # account is active
    staff = models.BooleanField(default=False) #staff rights
    admin = models.BooleanField(default=False) #admin rights
    name = models.CharField(max_length=200, default='')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_email(self):
        return self.email

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return True
    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_active(self):
        return self.active

class MeetContent(models.Model):
    meet_id = models.AutoField(primary_key=True)
    owner = models.CharField(max_length=200, default='', blank=True)
    date = models.DateTimeField(auto_now_add=True, blank=True) 
    hostname = models.CharField(max_length=200, default='', blank=True)
    title = models.CharField(max_length=200, default='', blank=True)
    duration = models.CharField(max_length=20, default='', blank=True)
    transcript = models.TextField(default='', blank=True)
    summary = models.TextField(default='', blank=True)

    def __str__(self):
        return self.title