import React from "react";

import ModelX from "../../../images/tesla-model-x-homepage.png";

const HomepageCar = ({ cena, typ, osob, dalsi }) => {
  return (
    <div className="homepage-car">
      <div className="homepage-car-content">
        <div className="homepage-car-text">
          <p className="cena">{cena}Kč/den</p>
          <p className="typ">{typ}</p>
          <p className="osob">{osob} osob</p>
          <p className="dalsi">{dalsi}</p>
          <button>Detaily</button>
        </div>

        <div className="obr">
          <img src={ModelX} alt="tesla model x" />
        </div>
      </div>
    </div>
  );
};

export default HomepageCar;
