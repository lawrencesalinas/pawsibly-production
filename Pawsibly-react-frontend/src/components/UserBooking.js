import React from "react";
import { CardTitle, Card, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

function UserBooking({ userBooking }) {
  console.log(userBooking);
  return (
    <div>
      {userBooking.map((bookingListings) => {
        console.log("all listing b", bookingListings);
        return   <div class= "container small">
        <div class="row center-cols justify-center"> 
            <Row class="small center-align"> 
                <div class="col s6 offset-s3">
                        <Card className='card' 
                            actions={[
                                <a key="1" href="#">Back To Top</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title={bookingListings.sitter}
                        >
                            <div>
                                Booking #{bookingListings.id}
                            </div>
                            <div>
                                Start Date: {bookingListings.start_date}
                            </div>
                            <div>
                                End Date: {bookingListings.end_date}
                            </div>
                            <Link
                            to={`/sitterListing/${bookingListings.id}`}>Go to Sitter Page</Link>
                        </Card>
                </div>
            </Row>
            
      </div>
    </div>
      })}
    </div>
  );
}

export default UserBooking;
