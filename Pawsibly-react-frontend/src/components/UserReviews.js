import React from 'react';
import { Link } from 'react-router-dom';
import { CardTitle, Card, Icon, Row } from "react-materialize";

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
                        header={<CardTitle image="https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />}
                        revealIcon={<Icon>more_vert</Icon>}
                        title={reviewListing.sitter}
                    >
                        <p>{reviewListing.id}</p>
                        <p>{reviewListing.rating}</p>
                        <p>{reviewListing.review}</p>
                        <Link
                            to={`/sitterListing/${reviewListing.id}`}>Go to Sitter Page</Link>
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
