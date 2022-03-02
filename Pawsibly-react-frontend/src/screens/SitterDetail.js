import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Image, Col, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import apiUrl from "../apiConfig";
import ReviewList from "../components/ReviewList";
import CreateBooking from "../components/CreateBooking";
import "./css/SitterDetail.css";
import CreateReview from "../components/CreateReview";
import { fetchNoAuth } from "../api/fetch";
export default function SitterDetail({ user }) {
  const [singleSitter, setSingleSitter] = useState([]);
  const [sitterReviews, setSitterReviews] = useState([]);
  const [trigger, setTrigger] = useState(false);
  let { id } = useParams();

  // fetch sitter details using useParams url
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/sitters/${id}`);
   
      setSingleSitter(data.sitter);
    }
    fetchData();
  }, [id]);

  console.log('sitter',singleSitter);
  

  // fetch reviews for the specific sitters using useParams
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios
        .get(`${apiUrl}/reviews/${id}`)
        .catch((error) => {
          console.log(error);
        });
      setSitterReviews(data.reviews);
    }
    fetchData();
  }, [id, trigger]);
  console.log(sitterReviews);
  return (
    <div className="listingdetail">
      <Row>
        <h1>
          {singleSitter.first_name} {singleSitter.last_name}{" "}
        </h1>
        <Row>
          <Col md={2}>
            <Rating
              value={singleSitter.rating}
              text={`${singleSitter.numReviews} reviews`}
              color={"#f8e825"}
            />
          </Col>
          <Col md={6}>
            <h5>
              {singleSitter.city}, {singleSitter.zipcode}
            </h5>
          </Col>
        </Row>
        <Row>
          <Image className="sitterimage" src={singleSitter.image} />
        </Row>
        <hr></hr>
        <Row>
          <Col md={8} lg={8} className="mt-5">
            <h2>About</h2>
            <p> {singleSitter.description}</p>
          </Col>
          <Col md={4} lg={4}>
            <div className="booking">
              <Row>
                <Col md={5}>
                  <h5>${singleSitter.price} / night</h5>
                </Col>
                <Col>
                  <Rating
                    value={singleSitter.rating}
                    text={`${singleSitter.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </Col>
              </Row>
              <CreateBooking user={user} />
              {user ? (
                <Link to={`/contact/${singleSitter.id}`}>
                  <Button className="contact_button" variant="warning">
                    Contact host
                  </Button>
                </Link>
              ) : (
                <Link to={`/sign-in/`}>
                  <Button className="contact_button" variant="warning">
                    Contact host
                  </Button>
                </Link>
              )}
            </div>
          </Col>
        </Row>
        <hr></hr>
        <h2>Reviews</h2>

        <Row>
          <Col md={6}>
            <div className="sitterreviews">
              {sitterReviews.map((review) => {
                return (
                  <li className="list" key={review.id}>
                    {/* pass singleSitters array to singleSitter component */}
                    <ReviewList review={review} />
                  </li>
                );
              })}
            </div>
          </Col>
          <Col md={6}>
            <Card>
              <div className="reviewbox">
                <h3>Review this sitter</h3>
                <h5>share your thought with other pet owners</h5>
                <CreateReview setTrigger={setTrigger} user={user} />
              </div>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
