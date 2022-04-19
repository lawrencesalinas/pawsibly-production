import React from "react";
import { useEffect, useContext } from "react";
import { useParams} from "react-router-dom";
import "./css/ContactScreen.css";
import { getSitterAndReviews } from "../context/sitter/SitterAction";
import SitterContext from "../context/sitter/SitterContext";
import Spinner from "../components/shared/Spinner";
function ContactScreen() {
  const { id } = useParams();

  const { sitter, dispatch, loading  } = useContext(SitterContext);
  
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getSitterData = async () => {
      const sitter = await getSitterAndReviews(id);
      dispatch({ type: "GET_SITTER", payload: sitter });
    };
    getSitterData();
  }, [dispatch, id]);

  const email = sitter.post_owner.email;

  if(loading){
    return <Spinner/>
  }

  return (
    <div className="contactscreen">
      <h3>Contact</h3>
      <br></br>
      <h3>Have questions? Email {sitter.first_name}</h3>
      <br></br>
      <h6>Email: </h6>
     <h5> {email}</h5>

    </div>
  );
}

export default ContactScreen;
