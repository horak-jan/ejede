import React from "react";
import Marker from "../../../images/marker-blue.png";
import Phone from "../../../images/phone-blue.png";
import Envelope from "../../../images/envelope-blue.png";

const PobockaPlace = () => {
  return (
    <div className="place">
      <h3>Sídlo firmy</h3>
      <img alt="marker icon" src={Marker} />
      <p>
        <span className="thick">Adresa:</span> 17. Listopadu 594/40, 708 00
        Ostrava Poruba
      </p>
      <img alt="phone icon" src={Phone} />
      <p>
        <span className="thick">Telefon:</span>+420 775 979 857
      </p>
      <img alt="email icon" src={Envelope} />
      <p>
        <span className="thick">Email:</span>info@ejede.cz
      </p>
    </div>
  );
};

export default PobockaPlace;
