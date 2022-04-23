import React from "react";

function Rating(props, color) {
//   console.log("rating props", props, color)
  return (
    <div className="rating">
    {/* each span is one star */}
      <span>
        <i style= {{color:props.color}}
          className={
    // if rating is greater or equal to 1, star is filled  //
            props.value >= 1
              ? "fas fa-star"
    // if rating is greater or equal to .5, star is half filled  // 
              : props.value >= 0.5
    // else star is empty 0 rating
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style= {{color:props.color}}
          className={
            props.value >= 2
              ? "fas fa-star"
              : props.value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style= {{color:props.color}}
          className={
            props.value >= 3
              ? "fas fa-star"
              : props.value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style= {{color:props.color}}
          className={
            props.value >= 4
              ? "fas fa-star"
              : props.value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style= {{color:props.color}}
          className={
            props.value >= 5
              ? "fas fa-star"
              : props.value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{props.text && props.text}</span>
    </div>
  );
}

export default Rating;
