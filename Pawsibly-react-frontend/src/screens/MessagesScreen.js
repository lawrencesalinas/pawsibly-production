import { Row, Col, Button, Card } from "react-bootstrap";
import "./css/MessagesScreen.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";

import { fetchWithAuth } from "../api/fetch";
import MessagesFrom from "../components/MessagesFrom";

function MessagesScreen({ user }) {
  const [trigger, setTrigger] = useState(false);
  const [messagesData, setMessagesData] = useState([]);
  const [messageId, setMessageId] = useState('');
  const [singleSitterMessages, setSingleSitterMessages]= useState([])
  const [thread, setThread]= useState()

  // I need a list of people who I messaged  and messaged me, sorted by time 
  // basically sitters that the user messaged and and the user messaged
  // do fetch request for messages with a key value pair pet_owner = user.id
  // return a list of the names of the sitters 

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/messages`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log("data", data);
      setMessagesData(data.message);
    }
    fetchData();
  }, [trigger]);
  
console.log("IAM DATA",messagesData);
useEffect(() => {
  async function fetchData() {
    const { data } = await axios.get(`${apiUrl}/messages`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });
    console.log("data", data);
    setMessagesData(data.message);
  }
  fetchData();
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
            <MessagesFrom user= {user} messagesData = {messagesData} />
            hi
            {messagesData.map((sitter) => {
              console.log(sitter);
              return (
                <ul>
                  
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
