import React from "react";

import Thumb from "../../../images/thumb-up.png";
import HandShake from "../../../images/hand-shake.png";
import Money from "../../../images/money.png";
import Wrench from "../../../images/wrench.png";
import Car from "../../../images/car.png";
import CarSide from "../../../images/sports-car.png";

const HomeSecondInfo = () => {
  return (
    <div className="home-second-info">
      <div className="home-second-info-icon-box">
        <img src={Money} alt="money icon" />
        <h3>VÝHODNÉ CENY</h3>
        <p>
          Výhodné ceny již od 230,- Kč / den Zvýhodněné ceny při dlouhodobém
          pronájmu
        </p>
      </div>
      <div className="home-second-info-icon-box">
        <img src={HandShake} alt="handshake icon" />
        <h3>PRONÁJMY</h3>
        <p>Krátkodobé i dlouhodobé pronájmy elektrickýc osobních automobilů</p>
      </div>
      <div className="home-second-info-icon-box">
        <img src={Car} alt="car icon" />
        <h3>PŘISTAVENÍ VOZIDLA</h3>
        <p>
          ZDARMA přistavíme vozidlo v Ostravě a okolí dle domluvy (letiště,
          nádraží, hotel,...)
        </p>
      </div>
      <div className="home-second-info-icon-box">
        <img src={Wrench} alt="wrench icon" />
        <h3>VLASTNÍ AUTOSERVIS</h3>
        <p>
          Díky vlastnímu autoservisu dostávají naše vozy tu nejlepší péči, jsou
          vždy ve 100% stavu, čistá a připravená jen pro Vás
        </p>
      </div>
      <div className="home-second-info-icon-box">
        <img src={Thumb} alt="thumbs up icon" />
        <h3>KVALITA</h3>
        <p>Kvalita, cena, spolehlivost, vše pro Vaši spokojenost</p>
      </div>
      <div className="home-second-info-icon-box">
        <img src={CarSide} alt="car side icon" />
        <h3>NABÍDKA VOZŮ</h3>
        <p>
          Nahlédněte do naší nabídky pro více informací o jednotlivých vozidlech
        </p>
      </div>
    </div>
  );
};

export default HomeSecondInfo;
