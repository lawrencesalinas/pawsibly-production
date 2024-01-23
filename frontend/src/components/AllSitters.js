import React from "react"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import "./css/AllSitters.css"

function AllSitter({ sitter: { id, image, city, rating, zipcode, numReviews, price } }) {

  return (
    <Link className="linkstyle" to={`/sitterlisting/${id}`}>
      <div className="allsitter-item">
        <div className="card-img animated-bg">
          <img src={image} alt="sitterImage" className="sitterListingImg animated-bg" id="sitterImage" />
          <div className="sitter-item-info">
            <div className="location">
              <p>{city}</p>
              <p>{zipcode}</p>
            </div>
            <div className="ratinginfo">
              <p className="reviewnum">
                {rating} ({numReviews} reviews)
              </p>
              <p className="ratings">
                <Rating value={rating} color={"#f8e825"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AllSitter
