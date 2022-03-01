import React, {useEffect, useState} from 'react';
import HostAPetForm from '../components/HostAPetForm'
import apiUrl from '../apiConfig';
import axios from 'axios';
import { fetchWithAuth } from '../api/fetch';

function HostAPetScreen({setTrigger, user}) {
  const [userData, setUserData] =useState([])
  const divStyle = {
    height: '90vh',
    margin: '3%'
    };
let id = user.id


useEffect(() => {
  // using the function fetchWith auth we make an api call to grab the user's data
  try {
    fetchWithAuth("profile", setUserData, "user", user);
  } catch (error) {
    console.log(error);
  }
}, []);
  
    console.log('sitter',userData);
  




  return (<div style={divStyle}>
    {
    
    <HostAPetForm setTrigger={setTrigger} user={user}/>
    }
   
   

  </div>
  )
}

export default HostAPetScreen;
