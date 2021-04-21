import SingleBooking from "./SingleBooking";

const ShowAllBookingsToUser = (props) => {
  return (
    <div className="show-all-booking-to-user">
      {props.allBookings.map((booking) => (
        <SingleBooking key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default ShowAllBookingsToUser;
