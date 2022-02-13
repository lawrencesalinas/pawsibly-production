from django.db import models
from django.contrib.auth import get_user_model


class Sitter(models.Model):
  # https://docs.djangoproject.com/en/3.0/ref/models/fields/
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zipcode = models.CharField(max_length = 5)
    supersitter = models.BooleanField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    rating = models.DecimalField(max_digits=7, decimal_places=2, default=0)
    description = models.TextField(null=True, blank=True) 
    image = models.ImageField(null=True, blank=True,upload_to='images/')
    post_owner = models.ForeignKey(
    get_user_model(),
    on_delete=models.CASCADE,
    related_name="post_owned"
    )
  
   
    def __str__(self):
        return self.first_name
      
    def as_dict(self):
        return {
            'rating': self.rating,
            'first_name': self.first_name,

    }