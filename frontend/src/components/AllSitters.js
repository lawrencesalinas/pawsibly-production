import React from "react"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import "./css/AllSitters.scss"

function AllSitter({ sitter: { first_name, last_name, title, id, image, city, rating, zipcode, numReviews, price }, loading }) {

  return (
    <Link className="linkstyle" to={`/sitterlisting/${id}`}>
      <div className="card-sitter">
        <div className="card-sitter-header" id='header'>
          <img src={image} alt="sitterImage" />
        </div>
        <div className="card-content">
          <h3 className="card-title " id="card-title">
            {city}
          </h3>
          <p className="card-excerpt" id="excerpt">
            {title}
          </p>
          <div className="author">
            <div className="profile-img " id="profile-img">
              <img src='https://randomuser.me/api/portraits/men/45.jpg' alt="" />
            </div>
            <div className="author-info">
              <strong className="" id="name">
                {first_name}
              </strong>
              <div className="ratinginfo ">
                <p className="reviewnum " >
                  {rating} ({numReviews} reviews)
                  <span className=""></span>
                </p>
                <p className="ratings " >
                  <Rating value={rating} color={"#f8e825"} />
                  <span className=""></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default AllSitter
