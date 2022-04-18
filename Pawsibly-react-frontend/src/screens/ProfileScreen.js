import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, Modal } from "react-bootstrap";
import apiUrl from "../apiConfig";
import "./css/ProfileScreen.css";
import { fetchWithAuth } from "../api/fetch";
import UserContext from "../context/user/UserContext";
import { getUser } from "../context/user/UserAction";
import Spinner from "../components/shared/Spinner";

export default function ProfileScreen({user}) {
  // user data and user pet is called here
  const [image, setImage] = useState();
  // const [userData, setUserData] = useState([]);  
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // api request to get userData using context
  const{ userData, dispatch, loading } = useContext(UserContext)
  useEffect(() => {
    dispatch({ type: "SET_LOADING" })
    const getUserData = async () => {
      const userData = await getUser(user)
      dispatch({ type: "GET_USER", payload: userData });
    };
    getUserData()
  }, [dispatch, user, trigger])


  if(loading){
    return <Spinner/>
  }

  const uploadPhoto = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("id", userData.id);

    fetch(`${apiUrl}/profileImage`, {
      method: "POST",
      headers: {
        Authorization: `Token ${user.token}`,
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
              <h3 className="flow-text">Hello, {userData.first_name}!</h3>
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
                <Link className="link" to={`/mylisting`}>
                  <Button variant="warning">My listing</Button>
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
          <i className="fas fa-paw paw fa-10x"></i>
        </Col>
      </Row>
    </div>
  );
}
