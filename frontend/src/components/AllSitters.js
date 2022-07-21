import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./css/AllSitters.css";

function AllSitter({
  sitter: { id, image, city, rating, zipcode, numReviews, price },
}) {
  //  console.log('this is s', sitter);
  return (
    <Link className="linkstyle" to={`/sitterlisting/${id}`}>
      <div className="allsitter" data-aos="fade-in" data-aos-delay="600">
        <img src={image} alt="sitterImage" className="sitterListingImg" />
        <div className="sitteriteminfo">
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
    </Link>
    // <div className="allsitter">
    //   <Card className="my-3 p-3 rounded">
    //     <Link to={`/sitterlisting/${id}`}>
    //       {/* render product name and image */}
    //       <Card.Img className="sitterimages" src={image} />
    //     </Link>

    //     <Card.Body>
    //       <Link to={`/sitterlisting/${id}`} style={linkStyle}>
    //         <Card.Title as="div">
    //           <h5>
    //             {city}
    //             <br></br> {zipcode}
    //           </h5>
    //         </Card.Title>
    //       </Link>

    //       <Card.Text as="div">
    //         <div className="my-3">
    //           {rating} ({numReviews} reviews)
    //           {/* render product props rating and number of reviews */}
    //           {/* props sent to Rating component  */}
    //           {/* render Rating component here */}
    //           <Rating value={rating} color={"#f8e825"} />
    //         </div>
    //       </Card.Text>

    //       <Card.Text as="h5">${price}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
}

export default AllSitter;
