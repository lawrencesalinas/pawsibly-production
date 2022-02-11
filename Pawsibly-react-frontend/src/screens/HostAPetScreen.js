import React from 'react';
import HostAPetForm from '../components/HostAPetForm'

function HostAPetScreen({setTrigger, user}) {
  const divStyle = {
    height: '90vh',
    margin: '3%'
    };
  return (<div style={divStyle}>
      <HostAPetForm setTrigger={setTrigger} user={user}/>
  </div>
  )
}

export default HostAPetScreen;
