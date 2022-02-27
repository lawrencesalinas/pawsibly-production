# create a thread with user and reciever
# if thread with user and reciever exist, send new messages there

from importlib.resources import contents
from math import prod
from pickletools import read_uint1
from urllib import request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
from ..models.Thread import Thread
from ..models. Message import  Message
from ..serializers import  MessageSerializer, MessagePostSerializer
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Q

class Threads(generics.ListCreateAPIView):
    permission_classes = ()
    serializer_class =  MessageSerializer
    def get(self,request):
        
        thread =  Thread.objects.filter(Q(user=request.user) | Q(receiver=request.user))
        # Run the data through the serializer
        data =  MessageSerializer( thread, many=True).data
        return Response({'message': data})
        

    # def post(self,request,pk):
    #     user = request.user
    #     receiver = request.data['receiver']
    #         if Thread.objects.filter(user=user, receiver = receiver).exists(): 
    #             thread = Thread.objects.filter(user=user, receiver=receiver)[0]
    #             return thread
    #         elif Thread.objects.filter(user=receiver, receiver=user).exists():
    #             thread = Thread.objects.filter(user=receiver, receiver=user)[0]
    #             return thread
       
        
                
# class Thread(generics.ListCreateAPIView):
#     permission_classes = ()
#     serializer_class =  MessageSerializer

#     def get(self, request):
#         print(request.data)
#         """Index request"""

#         thread =  Thread.objects.filter
#         # Run the data through the serializer
#         data =  MessageSerializer( message, many=True).data
#         return Response({'message': data})
    
#     def post(self, request):
     
            
#         print(request.data)
#         """Create request"""
#         print(request.data)
#         # Add user to request data object
#         # Serialize/create  Message
#         try:
#             receiver = 
        
#         except:

#         message =  MessagePostSerializer(data=request.data)
#         # If the  Message data is valid according to our serializer...
#         if  message.is_valid():
#             # Save the created  Message & send a response
#             r =  message.save()
#             return Response({ 'message':  message.data }, status=status.HTTP_201_CREATED)
#         # # If the data is not valid, return a response with the errors
#         return Response( message.data, status=status.HTTP_400_BAD_REQUEST)