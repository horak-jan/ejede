import React from "react";
import HomepageCar from "./HomepageCar";

const HomeSecond = () => {
  return (
    <div className="home-second">
      <h2>Nabídka našich aut v Ostravě</h2>
      <p className="home-second-p">Výběr oblíbených vozů našich klientů</p>
      <div className="home-second-car-container">
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
        <HomepageCar
          cena="500"
          typ="SUV"
          osob="5"
          dalsi="Velký zavazadlový prostor"
        />
      </div>
    </div>
  );
};

export default HomeSecond;
