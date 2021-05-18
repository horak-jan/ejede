import React from "react";

const PobockaPlace = () => {
  return (
    <div className="place">
      <h3>Sídlo firmy</h3>
      <img
        alt="marker icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/marker-blue_jo0k93.png"
      />
      <p>
        <span className="thick">Adresa:</span> 17. Listopadu 594/40, 708 00
        Ostrava Poruba
      </p>
      <img
        alt="phone icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356777/ejede/phone-blue_onooen.png"
      />
      <p>
        <span className="thick">Telefon:</span>+420 775 979 857
      </p>
      <img
        alt="email icon"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/envelope-blue_rg5121.png"
      />
      <p>
        <span className="thick">Email:</span>info@ejede.cz
      </p>
    </div>
  );
};

export default PobockaPlace;
