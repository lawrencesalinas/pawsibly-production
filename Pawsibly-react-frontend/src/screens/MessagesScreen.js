import { Row, Col, Button, Card } from "react-bootstrap";
import "./css/MessagesScreen.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import Thread from "../components/Thread";

import { fetchWithAuth } from "../api/fetch";
import MessagesFrom from "../components/MessagesFrom";

function MessagesScreen({ user }) {
  const [trigger, setTrigger] = useState(false);
  const [messagesData, setMessagesData] = useState([]);
  const [messageId, setMessageId] = useState();
  const [thread, setThread] = useState();

  // I need a list of people who I messaged  and messaged me, sorted by time
  // basically sitters that the user messaged and and the user messaged
  // do fetch request for messages with a key value pair pet_owner = user.id
  // return a list of the names of the sitters

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/messages/${messageId}`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log("data", data);
      setMessagesData(data.message);
    }
    fetchData();
  }, [trigger]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/messages`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });

      setMessagesData(data.message);
    }
    fetchData();
  }, [trigger]);

  let sitterNameList = [];
  // let m = messagesData.forEach((data) => {
  //   console.log("dataaaa", data.sender_user);
  //   if (sitterNameList.indexOf({first_name:data.sender_user.first_name, id:data.sender_user.id}) === -1) {
  //     sitterNameList.push({first_name:data.sender_user.first_name, id:data.sender_user.id});
  //   } else if (sitterNameList.indexOf(data.sender_user.first_name) > -1) {
  //     console.log(1 1"already exist in the sitterlist");
  //   }
  // });
  console.log(messagesData);
  console.log('id',messageId);
  console.log('fdxfgddfsd',sitterNameList);

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
            {/* <MessagesFrom user= {user} messagesData = {messagesData} /> */}

            {/* {sitterNameList.map((data) => {
              console.log('ddfsdfsdsd',data);
              return (
                <Card>
                  <Card.Title onClick={(e)=> setMessageId(e.target.value) }><button>{data}</button></Card.Title>
                </Card>
              );
            })} */}
          </Col>
          <Col className="col3" md={6} lg={8}>
            {/* <h1><Thread user={user}  messagesData={messagesData} setTrigger={setTrigger}/></h1> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MessagesScreen;
