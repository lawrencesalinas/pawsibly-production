import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Icon, Row } from "react-materialize";
import Rating from "../components/Rating";


function AllSitters({sitters}) {
 console.log('this is sitter', sitters);
  return(
       <div>
        {sitters.map(sitter=> {
            
           return (
            <Row>
            <Col m={6} s={12}>
            
              <div className="center">
                <Card
                  actions={[
                    <a key="1" href='google.com'  className="black-text">
                      Schedule a booking
                    </a>,
                    <a key="2" href="google.com" className="black-text">
                      Contact this sitter
                    </a>,
                  ]}
                  className="#e57373 red lighten-2"
                  closeIcon={<Icon>close</Icon>}
                  revealIcon={<Icon>more_vert</Icon>}
                  textclassName="white-text"
                  title={sitter.first_name}
                >
                  <ul>
                    <li key={sitter.id}>
                      <Link
                        to={`/sitterlisting/${sitter.id}`}
                        className="black-text"
                      >
                        learn more about this sitter
                      </Link>
                    </li>
                    <li>
                      <Rating
                        value={sitter.rating}
                        text={`${sitter.numReviews} reviews`}
                        color={"#f8e825"}
                      />
                    </li>
                  </ul>
                </Card>
              </div>
            </Col>
          </Row>
           )
        })}
       </div>
  )
}

export default AllSitters;
