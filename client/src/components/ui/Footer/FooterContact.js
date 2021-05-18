import React from "react";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      <h3>KONTAKTY</h3>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/marker_jwswkl.png"
          alt="map marker icon"
        />

        <div className="address">
          <p>17. Listopadu 594/40</p>
          <br />
          <p>708 00 Ostrava Poruba</p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356777/ejede/phone_qiieri.png"
          alt="phone icon"
        />
        <p>+420 775 979 857</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356775/ejede/envelope_yprzdl.png"
          alt="mail icon"
        />
        <p>info@ejede.cz</p>
      </div>
    </div>
  );
};

export default FooterContact;
