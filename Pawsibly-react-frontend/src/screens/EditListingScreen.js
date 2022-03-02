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

function EditListingScreen({setTrigger, setUserTrigger, user, userData}) {

    const id = userData.post_owned.map(data=> {
        return data.id.toString()
      })
      const oldFirstName = userData.post_owned.map(data=> {
        return data.first_name
      })
      const oldTitle = userData.post_owned.map(data=> {
        return data.title
      })
      const oldLastName = userData.post_owned.map(data=> {
        return data.last_name
      })
      const oldZipCode = userData.post_owned.map(data=> {
        return data.zipCode
      })
      const oldCity = userData.post_owned.map(data=> {
        return data.city
      })
      const oldPrice = userData.post_owned.map(data=> {
        return data.price
      })


console.log(oldLastName);

    
    const [title, setTitle] = useState(oldTitle);
    const [firstName, setfirstName] = useState(oldFirstName);
    const [lastName, setLastName] = useState(oldLastName);
    const [zipCode, setZipCode] = useState(oldZipCode);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState();
    const post_owner = user.id
  
    const navigate = useNavigate()
  
  
    // const sitter = {first_name:firstName, last_name:lastName, zipcode:zipCode, price:price, city:city, description:description}
  
    const editPost = (e) => {
      const uploadData = new FormData();
      uploadData.append("image", image);
      uploadData.append("title", title);
      uploadData.append("first_name", firstName);
      uploadData.append("zipcode", zipCode);
      uploadData.append("price", price);
      uploadData.append("city", city);
      uploadData.append("description", description);
      uploadData.append("post_owner", post_owner);
  
      fetch(`${apiUrl}/sitters`, {
        method: "PATCH",
        headers: {
          Authorization: `Token ${user.token}`,
        },
        body: uploadData,
      })
        .then((res) => {
          console.log("new pet added", res);
          setUserTrigger((x) => !x);
          setTrigger((x) => !x);
  
  
          navigate('/')
        })
        // useNavigate(-1)
        .catch((error) => {
          console.log(error);
        });
    };
  
  
  
    return (
      <div>
          <FormContainer className='editcontainer'>
          <label>Title</label>
          <input
            className="input"
            type="text"
            required
            value={title}
            title = 'title'
            id = 'title'
            onChange={(e) => setTitle(e.target.value)}
          />
  
          <label>Name</label>
          <input
            className="input"
            type="text"
            required
            value={firstName}
            first_name="first_name"
            id="name"
            onChange={(e) => setfirstName(e.target.value)}
          />
  
          <label>Zipcode</label>
          <input
            className="input"
            type="text"
            required
            value={zipCode}
            name="zipcode"
            id="zipcode"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <label>Price</label>
          <input
            className="input"
            type="text"
            required
            value={price}
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
  
          <label>City</label>
          <input
            className="input"
            type="text"
            required
            value={city}
            name="city"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
  
          <label>Description</label>
          <textArea
            className="input"
            type="text"
            required
            value={description}
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
  
          <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />
  
          <br></br>
          <br></br>
          <Button onClick={editPost} variant="success">
            Save changes
          </Button>
          </FormContainer>
      </div>
    );
  }

export default EditListingScreen