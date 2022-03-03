import React, { useEffect, useState } from "react";
import HostAPetForm from "../components/HostAPetForm";
import apiUrl from "../apiConfig";
import axios from "axios";
import { fetchWithAuth } from "../api/fetch";
import FormContainer from "../components/FormContainer";
import AllSitter from "../components/AllSitters";
import { Button } from 'react-bootstrap'
import './css/HostAPetScreen.css'
import {Link, useNavigate} from 'react-router-dom'


function UserListingScreen({ setTrigger, setUserTrigger, user, userData }) {
  const divStyle = {
    height: "90vh",
    margin: "3%",
  };
const navigate =useNavigate()
  const id = userData.post_owned.map(data=> {
    return data.id.toString()
  })

const deletePostById = () => {
    axios({
      url: `${apiUrl}/sitters/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then(() => {
        console.log("sitter deleted");
        setTrigger(x => !x)
        setUserTrigger(x=>!x)
     navigate('hostapet')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  console.log('user', userData);

  return (
    <div style={divStyle}>

        <FormContainer>
        {userData.post_owned.map((sitter) => {
          return (
   
          <div className="postbuttons">
          <AllSitter sitter={sitter} />

          <Link to={`/editlisting/`}>
          <button  id ='edit_button'> <i class="fa fa-pencil-alt" aria-hidden="true"></i> Edit</button>
         
                </Link>

          <button onClick={deletePostById} id = 'delete_button' > <i className="fa fa-trash" aria-hidden="true"> Delete</i></button>
                </div>
            )
        })}
 
      </FormContainer>
       
    </div>
  );
}

export default UserListingScreen