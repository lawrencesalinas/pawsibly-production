import React from "react";
import { Link } from "react-router-dom";
import "./css/SearchResult.css";
import Rating from "./Rating";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import reviewIcon from "@mui/icons-material/review";

function SearchResult({
    id,
  img,
  location,
  title,
  description,
  review,
  price,
  total,
  numReviews, 
  zipcode
}) {
  return (
    <Link className="links" to={`/sitterlisting/${id}`}>
    <div className="searchResult">
      
      <img src={img} alt="" />
      {/* <FavoriteBorderIcon className="searchResult_heart" /> */}
      <div className="searchResult_info">

      <div className="searchResult_infoTop">
        <h2>{title}</h2>
        <h3>{location} {zipcode}</h3>
        <p>_____</p>
        <p>{description}</p>
      </div>

      <div className="searchResult_infoBottom">
        <div className="searchResult_reviews">
        <Rating value={review} color={"#f8e825"}/> 
        {review} from ({numReviews} reviews)     
        </div>

        <div className="searchResults_price">
          <h2>${price} / night</h2>
          <p>${total} total</p>
        </div>
      </div>
    </div>
    </div>
    </Link>
  );
}

export default SearchResult;
