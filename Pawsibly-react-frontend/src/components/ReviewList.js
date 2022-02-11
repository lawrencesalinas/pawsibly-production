import React from "react";
import Rating from "../components/Rating";

function ReviewList({review}) {
  console.log('props',review);
  return (
    <div className="reviewlist">
      <h4>{review.pet_owner.first_name}</h4>
      <Rating value={review.rating}    color={"#f8e825"}/>
      <p>{review.review}</p>
    </div>
  );
}

export default ReviewList;
