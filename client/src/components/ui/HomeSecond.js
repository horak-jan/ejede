import React from "react";
import HomepageCar from "./HomepageCar";

const HomeSecond = () => {
  return (
    <div className="home-second">
      <h2>Nabídka našich aut v Ostravě</h2>
      <p className="home-second-p">
        Více vozů naleznete <a href="/browse">zde</a>{" "}
      </p>
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
  );
};

export default HomeSecond;
