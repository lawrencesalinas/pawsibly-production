import React, { useContext, useEffect, useState } from "react";
import HostAPetForm from "../components/HostAPetForm";
import apiUrl from "../apiConfig";
import axios from "axios";
import { fetchWithAuth } from "../api/fetch";
import FormContainer from "../components/FormContainer";
import AllSitter from "../components/AllSitters";
import { Button } from 'react-bootstrap'
import './css/HostAPetScreen.css'
import {Link} from 'react-router-dom'
import UserContext from "../context/user/UserContext";
import { getUsers } from "../context/user/UserAction";


function HostAPetScreen({ setTrigger, setUserTrigger, user, userData  }) {
  const divStyle = {
    height: "90vh",
    margin: "3%",
  };

  // const {userData, dispatch} = useContext(UserContext)
  // useEffect(()=> {
  //   dispatch({type: 'SET_LOADING'})
  //   const getUserData = async() => {
  //     const userData = await getUsers(user)
  //     dispatch({type: 'GET_USER', payload:userData})
  //   }
  //   getUserData()
  // },[dispatch])



  const id = userData.post_owned.map(data=> {
    return data.id.toString()
  })
const editPost = () => {

}
const deletePostById = () => {
    axios({
      url: `${apiUrl}/sitters/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((foundPet) => {
        console.log("pet deleted");
        setTrigger((x) => !x);
        setUserTrigger(x=>!x)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  console.log('user', userData);

  return (
    <div style={divStyle}>
      {userData.post_owned.length > 0?
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
 
      </FormContainer>:
<FormContainer>
<h1>Become a Pet Host</h1>
       <HostAPetForm setTrigger={setTrigger} setUserTrigger={setUserTrigger} user={user} />
       </FormContainer>}
       
    </div>
  );
}

export default HostAPetScreen
