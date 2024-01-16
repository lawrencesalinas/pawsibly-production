from django.urls import path

from .views.pet_views import Pets, PetDetail
from .views.sitter_views import Sitters, SitterDetail
from .views.user_views import SignUp, SignIn, SignOut, ChangePassword,  Profile, ProfileImage
from .views.booking_views import Bookings, BookingsDetail
from .views.review_views import Reviews,ReviewsDetail
from .views.message_views import Messages, MessageDetail
from .views.thread_views import Threads


# from views.booking_views import Review


urlpatterns = [
  	# Restful routing
    path('profile',Profile.as_view(), name='users'),
    path('profileImage',ProfileImage.as_view(), name='users'),
    path('sitters/<int:pk>',SitterDetail.as_view(), name='sitterdetail'),
    path('sitters',Sitters.as_view(), name='sitters'),
    path('bookings',Bookings.as_view(), name='bookings'),
    path('bookings/<int:pk>/', BookingsDetail.as_view(), name='bookings_detail'),
    path('pets', Pets.as_view(), name='pets'),
    # path('pets/', Pets.as_view(), name='pets'),
    path('pets/<int:pk>', PetDetail.as_view(), name='pet_detail'),
    path('reviews', Reviews.as_view(), name='reviews'),
    path('reviews/<int:pk>', ReviewsDetail.as_view(), name='reviews_detail'),
    path('messages', Messages.as_view(), name='message'),
    path('messages/<int:pk>', MessageDetail.as_view(), name='message_detail'),
    path('threads', Threads.as_view(), name='threads'),
    path('sign-up', SignUp.as_view(), name='sign-up'),
    path('sign-in', SignIn.as_view(), name='sign-in'),
    path('sign-out', SignOut.as_view(), name='sign-out'),
    path('change-pw/', ChangePassword.as_view(), name='change-pw')
]
