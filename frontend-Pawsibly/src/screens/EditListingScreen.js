import React, { useEffect, useState,useContext } from "react";
import apiUrl from "../apiConfig";
import FormContainer from "../components/shared/FormContainer";
import { Button } from 'react-bootstrap'
import './css/HostAPetScreen.css'
import {useNavigate} from 'react-router-dom'
import { getUser } from "../context/user/UserAction";
import UserContext from "../context/user/UserContext";
import Spinner from "../components/shared/Spinner";


function EditListingScreen({user}) {

  const { userData, dispatch, loading } = useContext(UserContext);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUser(user);
      dispatch({ type: "GET_USER", payload: userData });
    };
    getUserData();
  }, [dispatch, user, trigger]);


    // auto fill input with old data
    const id = userData.post_owned.map(data=> {
        return data.id.toString()
      })
      const oldFirstName = userData.post_owned.map(data=> {
        return data.first_name
      })
      const oldTitle = userData.post_owned.map(data=> {
        return data.title
      })
      const oldZipCode = userData.post_owned.map(data=> {
        return data.zipcode
      })
      const oldCity = userData.post_owned.map(data=> {
        return data.city
      })
      const oldPrice = userData.post_owned.map(data=> {
        return data.price
      })

      const oldDescription = userData.post_owned.map(data=> {
        return data.description
      })

      const oldImage = userData.post_owned.map(data=> {
        return data.image
      })

    const [title, setTitle] = useState(oldTitle);
    const [firstName, setfirstName] = useState(oldFirstName);
    const [zipCode, setZipCode] = useState(oldZipCode);
    const [price, setPrice] = useState(oldPrice);
    const [description, setDescription] = useState(oldDescription);
    const [city, setCity] = useState(oldCity);
    const [image, setImage] = useState(oldImage);
    const post_owner = user.id
  
    const navigate = useNavigate()
    
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
  
      fetch(`${apiUrl}/sitters/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Token ${user.token}`,
        },
        body: uploadData,
      })
        .then((res) => {  
          setTrigger((x) => !x);
          navigate('/')
        })

        .catch((error) => {
          console.log(error);
        });
    };

    if(loading){
      return <Spinner/>
    }
  
    return (
      <div>
          
          <FormContainer className='editcontainer'>
          <h1>Edit sitter listing</h1>
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