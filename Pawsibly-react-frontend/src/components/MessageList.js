import React from "react";
import Rating from "../components/Rating";

function MessageList({message}) {
  console.log('props',message);
  return (
    <div className="messagelist">
      <h4>{message.pet_owner.first_name}</h4>
      <Rating value={message.rating}    color={"#f8e825"}/>
      <p>{message.message}</p>
    </div>
  );
}

export default MessageList;
