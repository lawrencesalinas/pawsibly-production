import React from 'react'

{sitters.map((sitter) => {
    return (
      <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/sitter/${sitter.id}`}>
          {/* render sitter name and image */}
          <Card.Img src={sitter.image} />
        </Link>

        <Card.Body>
          <Link to={`/sitter/${sitter.id}`} style={linkStyle}>
            <Card.Title as="div">
              <strong>{sitter.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div className="my-3">
              {sitter.rating} from {sitter.numReviews}
              {/* render sitter props rating and number of reviews */}
              {/* props sent to Rating component  */}
              {/* render Rating component here */}
              <Rating
                value={sitter.rating}
                text={`${sitter.numReviews} reviews`}
                color={"#f8e825"}
              />
            </div>
          </Card.Text>

          <Card.Text as="h3">${sitter.price}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  })}