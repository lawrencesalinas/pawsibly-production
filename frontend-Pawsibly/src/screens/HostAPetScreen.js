import React, { useContext, useEffect, useState } from "react";
import HostAPetForm from "../components/HostAPetForm";
import apiUrl from "../apiConfig";
import axios from "axios";
import FormContainer from "../components/shared/FormContainer";
import AllSitter from "../components/AllSitters";
import "./css/HostAPetScreen.css";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import { getUser } from "../context/user/UserAction";
import Spinner from "../components/shared/Spinner";

function HostAPetScreen({  user }) {
  // api request to get userData using context
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

  const deletePostById = () => {
    const id = userData.post_owned.map((data) => {
      return data.id.toString();
    });
    axios({
      url: `${apiUrl}/sitters/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((foundData) => {
        setTrigger((x) => !x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if(loading){
    return <Spinner/>
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
          <HostAPetForm
            setTrigger={setTrigger}
            user={user}
          />
        </FormContainer>
      )}
    </div>
  );
}

export default HostAPetScreen;
