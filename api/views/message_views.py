from importlib.resources import contents
from math import prod
from pickletools import read_uint1
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
from ..models.Sitter import Sitter
from ..models. Message import  Message
from ..serializers import  MessageSerializer, MessagePostSerializer
from rest_framework.decorators import api_view, permission_classes

# Create your views here.


class  Messages(generics.ListCreateAPIView):
    permission_classes = ()
    serializer_class =  MessageSerializer

    def get(self, request):
        """Index request"""
        # Get all the  Messages:
        #  Messages =  Message.objects.all()
        # Filter the  Messages by owner, so you can only see your owned  Messages
        message =  Message.objects.filter(pet_owner=request.user)
        # Run the data through the serializer
        data =  MessageSerializer( message, many=True).data
        return Response({' message': data})
    
    def post(self, request):
        print(request.data)
        """Create request"""
        print(request.data)
        # Add user to request data object
        # Serialize/create  Message
    

        message =  MessagePostSerializer(data=request.data)
        # If the  Message data is valid according to our serializer...
        if  message.is_valid():
            # Save the created  Message & send a response
            r =  message.save()
            return Response({ 'message':  message.data }, status=status.HTTP_201_CREATED)
        # # If the data is not valid, return a response with the errors
        return Response( message.data, status=status.HTTP_400_BAD_REQUEST)


    
class  MessageDetail(generics.ListCreateAPIView):
    permission_classes = ()
    serializer_class =  MessageSerializer
    
    def get(self, request, pk):
        """Index request"""
        # Get all the  Messages:
        #  Messages =  Message.objects.all()
        # Filter the  Messages by owner, so you can only see your owned  Messages
        message =  Message.objects.filter(sitter=pk)
        # Run the data through the serializer
        data =  MessageSerializer( message, many=True).data
        return Response({'message': data})

    # def delete(self, request, pk):
    #     """Delete request"""
    #     # Locate  Message to delete
    #      Message = get_object_or_404( Message, pk=pk)
    #     # Check the  Message's owner against the user making this request
    #     if request.user !=  Message.owner:
    #         raise PermissionDenied('Unauthorized, you do not own this  Message')
    #     # Only delete if the user owns this  Message
    #      Message.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)

    # def partial_update(self, request, pk):
    #     """Update Request"""
    #     # Locate  Message
    #     # get_object_or_404 returns a object representation of our  Message
    #      Message = get_object_or_404( Message, pk=pk)
    #     # Check the  Message's owner against the user making this request
    #     if request.user !=  Message.pet_owner:
    #         raise PermissionDenied('Unauthorized, you do not own this  Message')

    #     # Ensure the owner field is set to the current user's ID
    #     # Validate updates with serializer
    #     data =  MessageSerializer( Message,data=request.data[' Message'], partial=True)
    #     if data.is_valid():
    #         # Save & send a 204 no content
    #         data.save()
    #         return Response(status=status.HTTP_204_NO_CONTENT)
    #     # If the data is not valid, return a response with the errors
    #     return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)




   