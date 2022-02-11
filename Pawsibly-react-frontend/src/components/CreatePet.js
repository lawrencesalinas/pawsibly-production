import { useState } from "react";
import {  Button, Modal } from "react-bootstrap";
import apiUrl from "../apiConfig";
import './css/CreatePet.css'

export default function PetForm(props) {
  // console.log('I AM USER',props);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createPet = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("name", name);
    uploadData.append("pet_owner", props.user.id);

    fetch(`${apiUrl}/pets`, {
      method: "POST",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
      body: uploadData,
    })
      .then((res) => {
        console.log("new pet added", res);
        props.setTrigger((x) => !x);
      })
      // useNavigate(-1)
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };

  return (
    <div>
      <Button variant='warning' onClick={handleShow}>
      Add Pet+
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Pet</Modal.Title>
        </Modal.Header>

        <label>
          Pet Name
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="file"
            onChange={(evt) => setImage(evt.target.files[0])}
          />
        </label>
        <br />
        <Button onClick={() => createPet()}>Add Pet</Button>
      </Modal>
    </div>
  );
}
