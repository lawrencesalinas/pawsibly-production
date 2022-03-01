import React from "react";
import { CardTitle, Card, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

function UserBooking({ userBooking }) {

 const months = {
    January: "01",
    Febuary:  "02",
    March:  "03",
    April:  "04",
    May:  "05",
    June:  "06",
    July:  "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
}

  let formatDate = (date) => {
    let newDateFormat = []
    const monthSlice = date.slice(5,7)
    for (const key in months) {
      if(months[key] == monthSlice){
         newDateFormat.push(key)
      }
    }
    newDateFormat.push(date.slice(0,4))
    newDateFormat.push(date.slice(8,10))
return `${newDateFormat[0]} ${newDateFormat[2]} ${newDateFormat[1]}`
  
  }
  let string = '2022-01-04'
  console.log('STRING',formatDate(string));
  // let newString = string.slice(5,7)



const sitterImages = (array => {
  return array.map(data => {
    console.log(data);
  })
})


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
                            header={<CardTitle image={bookingListings.sitter.image}/>}
                            title={bookingListings.sitter.first_name}
                        >
                            <div>
                                <h6>Drop-off date:</h6> {formatDate(bookingListings.start_date)}
                            </div>
                            <div>
                                <h6>Pick-up date:</h6> {formatDate(bookingListings.end_date)}
                            </div>
                            <div>
                                Confirmation# {bookingListings.id}
                            </div>
                            <br></br>
                            <Link
                            to={`/sitterListing/${bookingListings.sitter.id}`}><h6>Go to {bookingListings.sitter.first_name} Page</h6></Link>
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
