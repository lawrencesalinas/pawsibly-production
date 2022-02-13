from time import timezone
from django.contrib.auth import get_user_model
from django.db import models 
from .Sitter import Sitter
from .Thread import Thread 


class Message(models.Model):
    sender_user = models.ForeignKey(get_user_model(),on_delete=models.CASCADE, related_name='+')
    receiver_user = models.ForeignKey(get_user_model(),on_delete=models.CASCADE, related_name='+')
    thread = models.ForeignKey(Thread,on_delete=models.CASCADE,null=True, blank=True)
    msg_content = models.CharField(max_length=1000)
    image = models.ImageField('images/',null=True, blank=True)
    # creation_date = models.DateTimeField(auto_now_add=True, blank=True)
    is_read = models.BooleanField(default=False)
    
    
    # pet_owner = models.ForeignKey(get_user_model(),on_delete=models.CASCADE,null=True, blank=True)
    # sitter = models.ForeignKey(Sitter, on_delete=models.CASCADE,null=True, blank=True)
    # msg_content = models.CharField(max_length=500)

    
    def __str__(self):
      return self.msg_content