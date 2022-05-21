import React from "react";
import "./css/UserBooking.css";

function UserBooking({ userBooking }) {
  const months = {
    January: "01",
    Febuary: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  let formatDate = (date) => {
    let newDateFormat = [];
    const monthSlice = date.slice(5, 7);
    for (const key in months) {
      if (months[key] === monthSlice) {
        newDateFormat.push(key);
      }
    }
    newDateFormat.push(date.slice(0, 4));
    newDateFormat.push(date.slice(8, 10));
    return `${newDateFormat[0]} ${newDateFormat[2]} ${newDateFormat[1]}`;
  };
  return (
    <div className="ticket" data-aos="zoom-in">
      <h2 className="center-align">Bookings</h2>
      <div className="ticket-headings">
        <div>Name</div>
        <div>Drop-off date</div>
        <div>Pick-up date</div>
        <div>Confirmation no.</div>
      </div>
      <div className="booking-list">
        {userBooking.map((bookingList) => {
          return (
            <div className="book-item">
              <div className="data">{bookingList.sitter.first_name}</div>
              <div className="drop">{formatDate(bookingList.start_date)}</div>
              <div className="data">{formatDate(bookingList.end_date)}</div>
              <div className="data">{bookingList.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserBooking;
