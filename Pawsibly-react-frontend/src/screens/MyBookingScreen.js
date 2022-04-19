import React from 'react';
import { useEffect, useState } from "react";
import { fetchWithAuth } from '../api/fetch';
import UserBooking from '../components/UserBooking'
import './css/MyBookingScreen.css'

function MyBookingScreen({user}) {
    const [userBooking, setUserBooking] = useState([])

    useEffect(() => {
        try {
          fetchWithAuth("bookings", setUserBooking, "bookings", user);
        } catch (error) {
          console.log(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


  return(

   <div className='mybookingscreen'>
<h2 className='center-align'>All Bookings:</h2>
   <UserBooking userBooking={userBooking}/>
   </div>
  )
}

export default MyBookingScreen;
