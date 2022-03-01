import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import apiUrl from "../apiConfig";
import axios from "axios";
import "./css/ProfileScreen.css";
import { fetchWithAuth } from "../api/fetch";

export default function ProfileScreen(props) {
  // user data and user pet is called here
  const [image, setImage] = useState();
  const [userData, setUserData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // using the function fetchWith auth we make an api call to grab the user's data
    try {
      fetchWithAuth("profile", setUserData, "user", props.user);
    } catch (error) {
      console.log(error);
    }
  }, [trigger]);

  const uploadPhoto = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("id", userData.id);

    fetch(`${apiUrl}/profileImage`, {
      method: "POST",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
      body: uploadData,
    })
      .then((res) => {
        //  console.log('new pehoto added',res);
        setTrigger((x) => !x);
      })
      // useNavigate(-1)
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };
  console.log(userData);
  return (
    <div className="profile">
      <Row>
        <Col md={3}>
          <Card>
            <Image src={userData.image} fluid />
            <Button variant="success" onClick={handleShow}>
              upload photo
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>upload photo</Modal.Title>
              </Modal.Header>
              <label>
                <input
                  type="file"
                  onChange={(evt) => setImage(evt.target.files[0])}
                />
              </label>

              <Button variant="success " onClick={() => uploadPhoto()}>
                upload
              </Button>
            </Modal>
          </Card>
        </Col>

        <Col md={5}>
          <div className="profilescreen_info">
            <Row>
              <h3 class="flow-text">Hello, {userData.first_name}!</h3>
            </Row>
            <Row className="profilescreen_buttons">
              {/* <Col md={6}>
                <Link className="link" to={`/messages/`}>
                  <Button variant="warning">Messages</Button>
                </Link>
              </Col> */}  <Col md={6}>
                <Link className="link" to={`/hostapet`}>
                  <Button variant="warning">Host a Pet</Button>
                </Link>
              </Col>
              <Col md={6}>
                <Link className="link" to={`/myreviews`}>
                  <Button variant="warning">My Reviews</Button>
                </Link>
              </Col>
            </Row>
            <Row className="profilescreen_buttons">
            <Col md={6}>
                <Link className="link" to={`/myreviews`}>
                  <Button variant="warning">My Reviews</Button>
                </Link>
              </Col>
              <Col md={6}>
                <Link to={`/pets/`}>
                  <Button variant="warning">My Pets</Button>
                </Link>
              </Col>
            </Row>
            <Row className="profilescreen_buttons">
              <Col md={6}>
              <Link className="link" to={`/mybookings`}>
                  <Button variant="warning">My Bookings</Button>
                </Link>
              </Col>
            
              <Col md={6}>
              <Link to={`/change-password/`}>
                  <Button variant="warning">Change Pw</Button>
                </Link>
             
              </Col>
              </Row>
            
          </div>
        </Col>

        <Col clasName="ml-6" md={4}>
          <i class="fas fa-paw paw fa-10x"></i>
        </Col>
      </Row>
    </div>
  );
}
