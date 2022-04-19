import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";

function Thread({ user, messagesData }) {
  const [messages, setMessages] = useState([]);
  const [writeMessages, setWriteMessages] = useState("");
  const [trigger, setTrigger] = useState(false);
  // console.log('nESSSAGES', messagesData);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/messages/${4}`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      // console.log("data", data);
      setMessages(data.message);
    }
    fetchData();
  }, [trigger]);

  const messageContent = {
    sender_user: 4,
    receiver_user: user.id,
    msg_content: writeMessages,
  };
  const sendMessage = () => {
    fetch(`${apiUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
      body: JSON.stringify(messageContent),
    })
      .then((messages) => {
        // console.log("new message", messages);
        setTrigger((x) => !x);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Thread
      {messages.map((data) => {
        //  console.log(data.msg_content)
        return <h6> {data.msg_content} </h6>;
      })}
      <input
        type="text"
        value={writeMessages}
        onChange={(e) => setWriteMessages(e.target.value)}
      />
      <button onClick={sendMessage}>submit</button>
    </div>
  );
}

export default Thread;
