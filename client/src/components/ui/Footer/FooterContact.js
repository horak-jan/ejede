import React from "react";
import Envelope from "../../../images/envelope.png";
import Phone from "../../../images/phone.png";
import Marker from "../../../images/marker.png";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      <h3>KONTAKTY</h3>
      <div>
        <img src={Marker} alt="map marker icon" />

        <div className="address">
          <p>17. Listopadu 594/40</p>
          <br />
          <p>708 00 Ostrava Poruba</p>
        </div>
      </div>
      <div>
        <img src={Phone} alt="phone icon" />
        <p>+420 775 979 857</p>
      </div>
      <div>
        <img src={Envelope} alt="mail icon" />
        <p>info@ejede.cz</p>
      </div>
    </div>
  );
};

export default FooterContact;
