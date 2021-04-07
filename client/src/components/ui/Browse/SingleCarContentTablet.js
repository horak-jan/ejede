import React from "react";
import Checked from "../../../images/checked.png";

const SingleCarContentTablet = () => {
  return (
    <div className="singleCar-content-tablet">
      <img src={Checked} />

      <p>Zimní výbava</p>
      <img src={Checked} />

      <p>Dezinfikované auto</p>
      <img src={Checked} />

      <p>Automatická převodovka</p>
    </div>
  );
};

export default SingleCarContentTablet;
