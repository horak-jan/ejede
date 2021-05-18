import React from "react";

const OpeningHours = () => {
  return (
    <div className="hours">
      <h3>Otevírací doba</h3>
      <img
        alt="clock icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/clock_eihzjb.png"
      />{" "}
      <p>Pondělí - Pátek - 8:00 - 17:00</p>
      <img
        alt="clock icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/clock_eihzjb.png"
      />
      <p>Sobota - 9:00 - 17:00</p>
      <img
        alt="clock icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/clock_eihzjb.png"
      />
      <p>Neděle - 9:00 - 17:00</p>
    </div>
  );
};

export default OpeningHours;
