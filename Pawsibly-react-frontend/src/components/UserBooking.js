import React from "react";
import { CardTitle, Card, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

function UserBooking({ userBooking }) {

 const months = {
    january: "01",
    febuary:  "02",
    march:  "03",
    april:  "04",
    may:  "05",
    june:  "06",
    july:  "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
}



  let dateSlice = (date) => {
    let newDateFormat = []
    const monthSlice = date.slice(5,7)
    let dates = {}
    for (const key in months) {
      if(months[key] == monthSlice){
         newDateFormat.push(key)
      }
    }

  
  }
  let string = '2022-01-04'
  console.log('STRING',dateSlice(string));
  // let newString = string.slice(5,7)






  // console.log('SLCEEEEE', sliceUserDates);
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
