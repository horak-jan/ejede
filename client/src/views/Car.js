import React from "react";
import SingleCarContentPc from "../components/ui/Browse/SingleCarContentPc";
import CarForm from "../components/ui/Car/CarForm";
import CarImageSlider from "../components/ui/Car/CarImageSlider";

import { useStateValue } from "../state";

const Car = () => {
  const [{ selectedCar }, dispatch] = useStateValue();

  let {
    make,
    year,
    model,
    seats,
    doors,
    rating,
    color,
    range,
    dayPrice,
    image,
    _id,
    price,
  } = selectedCar.car;

  return (
    <div className="car-view">
      <div className="container">
        <CarImageSlider images={image} />
        <SingleCarContentPc
          info={{
            make,
            model,
            color,
            year,
            range,
            price,
            dayPrice,
            seats,
            image,
          }}
        />
        <CarForm />
      </div>
    </div>
  );
};

export default Car;
