import React from "react";

import FooterLinks from "../components/ui/Footer/FooterLinks";
import FooterPlaces from "../components/ui/Footer/FooterPlaces";
import FooterContactAndMedia from "../components/ui/Footer/FooterContactAndMedia";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <FooterContactAndMedia />

        <FooterLinks />

        <FooterPlaces />
      </div>
    </div>
  );
};

export default Footer;
