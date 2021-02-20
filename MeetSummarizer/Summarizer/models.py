from django.db import models

class MeetContent(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=5000)

    def __str__(self):
        return self.title