import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'

function MessagesFrom({user, messagesData}) {
  console.log('messageDataaa', messagesData);
// iterate a the list of sitter names and return 
let sitterNameList = []
let m = messagesData.forEach(data => {
  console.log('dataaaa',data.sender_user.first_name);
  if(sitterNameList.indexOf(data.sender_user.first_name) === -1){
    sitterNameList.push(data.sender_user.first_name)
  } else if(sitterNameList.indexOf(data.sitter) > -1){
    console.log(data.sitter + 'already exist in the sitterlist');
  }


})
console.log('list', m);
  return (
<div>
{sitterNameList.map(name=> {
  return (

      <Card>

  <Card.Title>{name}</Card.Title>
  </Card>
 
  )
})}
  </div>
  )
}

export default MessagesFrom