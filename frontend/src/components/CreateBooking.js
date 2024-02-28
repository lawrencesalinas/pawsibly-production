import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from "react-date-range"
import { Row, Col, Button, Container, Modal } from "react-bootstrap"
import "./css/CreateBooking.scss"
import apiUrl from "../apiConfig"

export default function CreateBooking({ user }) {
  // console.log("this is props for sitter booking", props);
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const { id } = useParams()
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const [smShow, setSmShow] = useState(false)
  const handleDate = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const createBooking = (e) => {
    if (user === null) {
      navigate("/sign-in")
    } else {
      console.log(user, id)
      e.preventDefault()
      const booking = {
        pet_owner: user.id,
        start_date: startDate,
        end_date: endDate,
        sitter: id,
      }
      console.log(booking)
      fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${user.token}`,
        },
        body: JSON.stringify(booking),
      })
        .then((createdBooking) => {
        })
        .catch((error) => {
          console.log(error)
        })
      setSmShow(true)
    }
  }
  return (

    <div className="createbooking">
      <DateRange
        // className="datepicker"
        ranges={[selectionRange]}
        onChange={handleDate}
        name="date"
        id="date"
      />
      <button
        className="createbooking_button"
        onClick={createBooking}
      >
        Book
      </button>

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
  )
}
