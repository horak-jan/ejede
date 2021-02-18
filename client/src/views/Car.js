import React from "react";

import { useStateValue } from "../state";

const Car = () => {
  const [{ selectedCar }, dispatch] = useStateValue();

  let { make, year, model, seats, doors, rating, range } = selectedCar.car;

  return (
    <div>
      <h2>
        {make} {model}
      </h2>
    </div>
  );
};

export default Car;
