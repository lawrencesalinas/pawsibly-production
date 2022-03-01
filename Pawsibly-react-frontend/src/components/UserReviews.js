import React from 'react';
import { Link } from 'react-router-dom';
import { CardTitle, Card, Icon, Row } from "react-materialize";
import Rating from './Rating';

function UserReviews({reviewList}) {
  return (
  <div>
    {reviewList.map(reviewListing => {
      console.log('rev',reviewListing)
      return(
        <div class="container small">
        <div class="row center-cols justify-center">
            <Row class="small center-align">
                <div class="col s6 offset-s3">
                    <Card className='card'
                        actions={[
                            <a key="1" href="#">Back To Top</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle/>}
                        revealIcon={<Icon>more_vert</Icon>}
                        title={reviewListing.sitter}
                    >
                        <p>{reviewListing.rating}</p>
                        <Rating color={"#f8e825"} value={reviewListing.rating}/>
                        <p>{reviewListing.review}</p>
                        <Link
                            to={`/sitterListing/${reviewListing.id}`}>Go to {reviewListing.sitter}'s Page</Link>
                    </Card>
                </div>
            </Row>

        </div>
    </div>
      )
    })}
{/* {reviewList.map((r) => {
        console.log('all listing r', r)
        return 
        (<div>
   
            <hr></hr>
        </div>
        )
}) */}
</div>
  )
}

export default UserReviews;
