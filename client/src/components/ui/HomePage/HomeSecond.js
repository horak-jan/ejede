import React from "react";
import HomepageCar from "./HomepageCar";

const HomeSecond = () => {
  return (
    <div className="home-second">
      <h2>Nejnovější vozidla k pronájmu</h2>
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
