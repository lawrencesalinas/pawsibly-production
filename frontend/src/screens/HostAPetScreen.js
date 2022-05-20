import React, { useContext, useEffect, useState } from "react";
import HostAPetForm from "../components/HostAPetForm";

import FormContainer from "../components/shared/FormContainer";
import AllSitter from "../components/AllSitters";
import "./css/HostAPetScreen.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import { getUserDetails } from "../context/user/UserAction";
import { deleteSitter } from "../context/sitter/SitterAction";
import Spinner from "../components/shared/Spinner";

import SitterContext from "../context/sitter/SitterContext";

function HostAPetScreen({ user }) {
  // api request to get userData using context
  const { isSuccess, dispatch: deleteDispatch } = useContext(SitterContext);
  const { userData, dispatch, loading } = useContext(UserContext);
  const [trigger, setTrigger] = useState(false);

  const navigate = useNavigate();

  // Get user data
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserDetails(user);
      dispatch({ type: "GET_USER", payload: userData });
    };
    getUserData();
  }, [dispatch, user, trigger, deleteDispatch, isSuccess]);

  // Delete sitter posting
  const deletePostById = async () => {
    console.log("hello");
    const id = userData.post_owned.map((data) => {
      return data.id.toString();
    });
    await deleteSitter(user, id);
    deleteDispatch({ type: "DELETE_SITTER" });
    navigate("/profile");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="hostapetscreen">
      {userData.post_owned.length > 0 ? (
        <FormContainer>
          {userData.post_owned.map((sitter) => {
            return (
              <div className="postbuttons">
                <AllSitter sitter={sitter} />

                <Link to={`/editlisting/`}>
                  <button id="edit_button">
                    {" "}
                    <i className="fa fa-pencil-alt" aria-hidden="true"></i> Edit
                  </button>
                </Link>

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
      ) : (
        <FormContainer>
          <h1>Become a Pet Host</h1>
          <HostAPetForm setTrigger={setTrigger} user={user} />
        </FormContainer>
      )}
    </div>
  );
}

export default HostAPetScreen;
