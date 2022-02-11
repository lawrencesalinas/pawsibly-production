import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { Row, Col, Button, Container, Modal} from 'react-bootstrap'
import "./css/CreateBooking.css";

export default function CreateBooking({user}) {
  // console.log("this is props for sitter booking", props);
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { id } = useParams()
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const [smShow, setSmShow] = useState(false);
  const handleDate = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate);
    console.log('end',endDate);
  }
  

  const createBooking = (e) => {
    if(user == null){
      navigate('/sign-in')
    } else {
    e.preventDefault();
    const booking = {
      pet_owner: user.id,
      start_date: startDate,
      end_date: endDate,
      sitter: `${id}`
    };

    fetch(`http://localhost:8000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
      body: JSON.stringify(booking),
    })
      .then((createdBooking) => {
        console.log("new booking added", createdBooking);
      })
      .catch((error) => {
        console.log(error);
      });
      setSmShow(true)
  };
  }
  return (
    <Container>
    <div class="createbooking col text-center">
      <Row>
    <Col>
      <DateRange
        className="datepicker"
        ranges={[selectionRange]}
        onChange={handleDate}
        name="date"
        id="date"
      />
      <Button className = 'createbooking_button' variant = 'warning' onClick={createBooking}>Book</Button>
      </Col>
      </Row>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Booking Success
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
    
 </Container>
  );
}
