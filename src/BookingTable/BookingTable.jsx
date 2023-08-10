import React from "react";
import BookingTableRow from "./BookingTableRow";
import { useSelector } from "react-redux";

const BookingTable = () => {
  const bookings = useSelector((state) => state.bookings);

  return (
    <section>
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <BookingTableRow
              key={booking.id}
              booking={booking}
            ></BookingTableRow>
          ))}
        </table>
      </div>
    </section>
  );
};

export default BookingTable;
