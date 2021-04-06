import React from "react";
import Clock from "../../../images/clock.png";

const OpeningHours = () => {
  return (
    <div className="hours">
      <h3>Otevírací doba</h3>
      <img alt="clock icon" src={Clock} /> <p>Pondělí - Pátek - 8:00 - 17:00</p>
      <img alt="clock icon" src={Clock} />
      <p>Sobota - 9:00 - 17:00</p>
      <img alt="clock icon" src={Clock} />
      <p>Neděle - 9:00 - 17:00</p>
    </div>
  );
};

export default OpeningHours;
