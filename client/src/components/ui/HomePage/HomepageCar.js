import React from "react";

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
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/tesla-model-x-homepage_yh22cz.png"
            alt="tesla model x"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageCar;
