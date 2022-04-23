import React from "react";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../context/user/UserAction";
import { Link } from "react-router-dom";
import { CardTitle, Card, Icon, Row } from "react-materialize";
import Rating from "../components/Rating";

function UserReviewScreen({ user }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchWithAuth("reviews", setReviewList, "reviews", user);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
      <h4 className="center">These are the reviews I posted:</h4>
      <div>
        {reviewList.map((reviewListing) => {
      
          return (
            <div className="container small">
              <div className="row center-cols justify-center">
                <Row className="small center-align">
                  <div className="col s6 offset-s3">
                    <Card
                      className="card"
                      actions={[
                        <a key="1" href="/#">
                          Back To Top
                        </a>,
                      ]}
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle />}
                      revealIcon={<Icon>more_vert</Icon>}
                      title={reviewListing.sitter}
                    >
                      <p>{reviewListing.rating}</p>
                      <Rating color={"#f8e825"} value={reviewListing.rating} />
                      <p>{reviewListing.review}</p>
                      <Link to={`/sitterListing/${reviewListing.id}`}>
                        Go to {reviewListing.sitter}'s Page
                      </Link>
                    </Card>
                  </div>
                </Row>
              </div>
            </div>
          );
        })}
      </div>
      )
    </div>
  );
}

export default UserReviewScreen;
