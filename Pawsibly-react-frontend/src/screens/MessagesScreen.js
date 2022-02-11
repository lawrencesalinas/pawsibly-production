import { Row, Col, Button, Card } from "react-bootstrap";
import "./css/MessagesScreen.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";

import { fetchWithAuth } from "../api/fetch";

function MessagesScreen({ user }) {
  const [trigger, setTrigger] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState('');
  const [singleSitterMessages, setSingleSitterMessages]= useState([])





  useEffect(() => {
    async function fetchPets() {
      const { data } = await axios.get(`${apiUrl}/messages/${messageId}`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log("data", data);
      setSingleSitterMessages(data.message);
    }
    fetchPets();
  }, [trigger]);
  



// fetched data messages to see all the messages
  useEffect(() => {
    async function fetchPets() {
      const { data } = await axios.get(`${apiUrl}/messages`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log("data", data);
      setMessages(data.message);
    }
    fetchPets();
  }, [trigger]);

  return (
    <div className="messages_screen">
      <div className="messages_container">
        <Row className="row1">
          <Col className="col1" md={4} lg={4}>
            <h4>Messages</h4>
          </Col>
          <Col className="col1" md={6} lg={6}>
          <h4>{messageId}</h4>
          </Col>
        </Row>
        <Row className="row2">
          <Col className="col3" md={4} lg={4}>
            {messages.map((sitter) => {
              console.log(sitter);
              return (
                <ul>
                  <Card onClick={()=> setMessageId(sitter.sitter)}>
                  <Card.Title>{sitter.sitter}</Card.Title> 
                  </Card>
                </ul>
              );
            })}
          </Col>
          <Col className="col3" md={6} lg={8}>
           <h1>PAGE UNDER CONSTRUCTION</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MessagesScreen;
