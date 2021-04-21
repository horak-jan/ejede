import DeleteBookingButtons from "./DeleteBookingButtons";
const SingleBooking = (props) => {
  const {
    _id,
    carId,
    carImage,
    startDate,
    endDate,
    email,
    mobil,
    notes,
  } = props.booking;
  const StartDate = new Date(startDate).toLocaleDateString();
  const EndDate = new Date(endDate).toLocaleDateString();
  return (
    <div className="single-booking">
      <img className="car-img" src={carImage} alt="booked car" />
      <div className="dates">
        <p>
          <span className="red">Od: </span>
          {StartDate}
        </p>
        <p>
          <span className="red">Do: </span>
          {EndDate}
        </p>
      </div>
      <div>
        <p>
          <span className="red">Kontakt: </span>
        </p>
        <p>{email}</p>
        <p>{mobil}</p>
      </div>
      <div>
        <p>
          <span className="red">Poznámky: </span>
          {notes}
        </p>
      </div>
      <DeleteBookingButtons bookingId={_id} />
    </div>
  );
};

export default SingleBooking;
