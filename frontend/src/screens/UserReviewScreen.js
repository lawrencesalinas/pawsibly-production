import React from "react";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../context/user/UserAction";
import Rating from "../components/Rating";
import "../components/css/UserBooking.css";

function UserReviewScreen({ user }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchWithAuth("reviews", setReviewList, "reviews", user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ticket" data-aos="zoom-in">
      <h2 className="center-align">Reviews</h2>
      <div className="ticket-headings">
        <div>Name</div>
        <div>Rating</div>
        <div>Comment</div>
        <div></div>
      </div>
      <div className="review-list">
        {reviewList.map((review) => {
          return (
            <div className="review-item">
              <div className="dataName">{review.sitter}</div>
              <div className="ratingnum">
                {" "}
                <Rating color={"#f8e825"} value={review.rating} />
              </div>
              <div className="commentreview">{review.review}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserReviewScreen;
