import React from "react";

const SingleCarContentText = (props) => {
  return (
    <div className="singleCar-content-text">
      <p>
        <img
          src="https://img.icons8.com/ios-glyphs/24/000000/passenger.png"
          alt="sedadla"
        />
        {props.seats}
      </p>
      <p>
        <img
          src="https://img.icons8.com/material-rounded/24/000000/car-door.png"
          alt="doors"
        />
        {props.doors}
      </p>
      <p>
        <img
          src="https://img.icons8.com/windows/32/000000/full-battery.png"
          alt="dojezd"
        />
        {props.range}Km
      </p>
      <p>
        <img
          src="https://img.icons8.com/fluent-systems-regular/24/000000/cooling.png"
          alt="klimatizace"
        />
        A/C
      </p>
    </div>
  );
};

export default SingleCarContentText;
