from rest_framework import serializers
from Summarizer.models import MeetContent

class MeetContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetContent
        fields = ('title', 'content')
