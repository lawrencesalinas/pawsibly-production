import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Rating from "../components/Rating";
import ReviewList from "../components/ReviewList";
import CreateBooking from "../components/CreateBooking";
import "./css/SitterDetail.css";
import CreateReview from "../components/CreateReview";
import SitterContext from "../context/sitter/SitterContext";
import { getSitterAndReviews } from "../context/sitter/SitterAction";
import Spinner from "../components/shared/Spinner";

export default function SitterDetail({ user }) {
  const [trigger, setTrigger] = useState(false);
  let { id } = useParams();

  const { sitter, dispatch, loading, sitterReviews } =
    useContext(SitterContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getSitterData = async () => {
      const sitter = await getSitterAndReviews(id);
      dispatch({ type: "GET_SITTER", payload: sitter });
    };
    getSitterData();
  }, [dispatch, id, trigger]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="sitter-detail-container">
      <div className="top">
        {/* Sitter image and info */}
        <div className="top-left" data-aos="fade-right">
          <h1>{sitter.first_name}</h1>
          <div className="sitter-info">
            <p className="stars">
              <Rating
                value={sitter.rating}
                text={`${sitter.numReviews} reviews`}
                color={"#f8e825"}
              />
            </p>
            <h5>
              {sitter.city} {sitter.zipcode}
            </h5>
          </div>
          <img src={sitter.image} alt="sitter image" className="sitter-image" />
        </div>

        {/* Book */}
        <div className="top-right" data-aos="fade-left">
          <div className="booking-calendar">
            <div className="pricing">
              <h5>${sitter.price} / night</h5>
            </div>
            <CreateBooking />
            <div className="contact">
              {user ? (
                <Link to={`/contact/${sitter.id}`}>
                  <Button className="contact_button" variant="warning">
                    Contact host
                  </Button>
                </Link>
              ) : (
                <Link to="/sign-in">
                  <Button className="contact_button" variant="warning">
                    Contact host
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      {/* About Section */}

      <div className="about-info">
        <div className="description">
          <h2>About</h2>
          <p>{sitter.description}</p>
        </div>
      </div>

      {/* Reviews Section */}
      {sitterReviews.length !== 0 && (
        <div className="reviews" data-aos="fade-right">
          <h2>Reviews</h2>
          <div className="reviewslist">
            <div className="sitterreviews">
              {sitterReviews.map((review) => {
                return (
                  <li className="list" key={review.id}>
                    {/* pass sitters array to sitter component */}
                    <ReviewList review={review} />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="reviewbox" data-aos="flip-right" data-aos-delay="400">
        <h3>Review this sitter</h3>
        <h5>share your thoughts with other pet owners</h5>
        <CreateReview setTrigger={setTrigger} user={user} />
      </div>
    </div>
    // <div className="SearchPage" data-aos="zoom-in">
    //   <Row>
    //     <h1>
    //       {sitter.first_name} {sitter.last_name}{" "}
    //     </h1>
    //     <Row>
    //       <Col md={2}>
    //         <Rating
    //           value={sitter.rating}
    //           text={`${sitter.numReviews} reviews`}
    //           color={"#f8e825"}
    //         />
    //       </Col>
    //       <Col md={6}>
    //         <h5>
    //           {sitter.city}, {sitter.zipcode}
    //         </h5>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Image className="sitterimage" src={sitter.image} />
    //     </Row>
    //     <hr></hr>
    //     <Row>
    //       <Col xs={12} sm={12} md={8} lg={8} className="mt-5">
    //         <h2>About</h2>
    //         <p> {sitter.description}</p>
    //       </Col>
    //       <Col md={4} lg={4}>
    //         <div className="booking">
    //           <Row>
    //             <Col md={5}>
    //               <h5>${sitter.price} / night</h5>
    //             </Col>
    //             <Col>
    //               <Rating
    //                 value={sitter.rating}
    //                 text={`${sitter.numReviews} reviews`}
    //                 color={"#f8e825"}
    //               />
    //             </Col>
    //           </Row>
    //           <CreateBooking user={user} />
    //           {user ? (
    //             <Link to={`/contact/${sitter.id}`}>
    //               <Button className="contact_button" variant="warning">
    //                 Contact host
    //               </Button>
    //             </Link>
    //           ) : (
    //             <Link to={`/sign-in/`}>
    //               <Button className="contact_button" variant="warning">
    //                 Contact host
    //               </Button>
    //             </Link>
    //           )}
    //         </div>
    //       </Col>
    //     </Row>
    //     <hr></hr>
    //     <h2>Reviews</h2>

    //     <Row>
    //       <Col md={6}>
    //         <div className="sitterreviews">
    //           {sitterReviews.map((review) => {
    //             return (
    //               <li className="list" key={review.id}>
    //                 {/* pass sitters array to sitter component */}
    //                 <ReviewList review={review} />
    //               </li>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col md={6}>
    //         <Card>
    //           <div className="reviewbox">
    //             <h3>Review this sitter</h3>
    //             <h5>share your thought with other pet owners</h5>
    //             <CreateReview setTrigger={setTrigger} user={user} />
    //           </div>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Row>
    // </div>
  );
}
