import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import apiUrl from "../apiConfig";
import axios from "axios";
import "./css/ProfileScreen.css";
import { fetchWithAuth } from "../api/fetch";
import AllSitter from "../components/AllSitters";
import FormContainer from "../components/FormContainer";

function UserListingScreen({ user, userData }) {
  // const [userData, setUserData] = useState([]);

  const [trigger, setTrigger] = useState(false);
  const [showPost, setShowPost] = useState(null);
  const [newName, setNewName] = useState("");
  const divStyle = {
    height: "90vh",
    margin: "3%",
  };

  const deletePostById = (id) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editPost = () => {
    console.log("edit");
  };

  return (
    <FormContainer>
      {userData.post_owned.map((sitter) => {
        return (
          <div className="postbuttons">
            <AllSitter sitter={sitter} />
            <button onSubmit={editPost} id="edit_button">
              {" "}
              <i class="fa fa-pencil-alt" aria-hidden="true"></i> Edit
            </button>
            <button onClick={deletePostById} id="delete_button">
              {" "}
              <i className="fa fa-trash" aria-hidden="true">
                {" "}
                Delete
              </i>
            </button>
          </div>
        );
      })}
    </FormContainer>
  );
}

export default UserListingScreen;
