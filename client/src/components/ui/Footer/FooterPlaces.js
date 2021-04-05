import React from "react";
import FooterPlacesList from "./FooterPlacesList.json";
import FooterP from "./FooterP";

const FooterPlaces = () => {
  return (
    <div className="footer-places">
      <h3>KDE PŮSOBÍME</h3>

      {FooterPlacesList.map((place) => (
        <FooterP key={place.name} place={place} />
      ))}
    </div>
  );
};

export default FooterPlaces;
