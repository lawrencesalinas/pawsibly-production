from django.contrib.auth import get_user_model
from django.db import models 
from .Sitter import Sitter

class Message(models.Model):
    pet_owner = models.ForeignKey(get_user_model(),on_delete=models.CASCADE,null=True, blank=True)
    sitter = models.ForeignKey(Sitter, on_delete=models.CASCADE,null=True, blank=True)
    msg_content = models.CharField(max_length=500)
    #  created_at = # time field
    
    def __str__(self):
      return self.msg_content