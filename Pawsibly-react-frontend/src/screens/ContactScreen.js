import React from "react";
import { useState, useEffect } from "react";
import { Container, TextInput } from "react-materialize";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiUrl from "../apiConfig";
import "./css/ContactScreen.css";

function ContactScreen({ user, setTrigger }) {
  console.log("sss", user);
  const [message, setMessage] = useState("");
  const [singleSitter, setSingleSitter] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/sitters/${id}`);
      setSingleSitter(data.sitter);
    }
    fetchData();
  }, [id]);

  const messageContent = {
    receiver_user: id,
    sender_user: user.id,
    msg_content: message,
  };
  const sendMessage = () => {
    console.log("post", message);
    fetch(`${apiUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
      body: JSON.stringify(messageContent),
    })
      .then((messages) => {
        console.log("new message", messages);
        setTrigger((x) => !x);
      })
      .catch((error) => {
        console.log(error);
      });
    setSmShow(true);
  };

  return (
    <div className="contactscreen">
      <h3>Contact {singleSitter.first_name} </h3>
      <br></br>
      <h3>Have questions? Message {singleSitter.first_name}</h3>
      <div className="area">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="area"
          value={message}
          rows="10"
          cols="10"
        />
      </div>
      <Button onClick={sendMessage} variant="light">
        Send message
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Message sent
          </Modal.Title>
        </Modal.Header>
        <Link to={`/sitterlisting/${id}`}>
          <Button className="contact_button" variant="danger">
            close
          </Button>
        </Link>
      </Modal>
    </div>
  );
}

export default ContactScreen;
