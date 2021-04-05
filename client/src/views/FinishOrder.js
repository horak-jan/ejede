import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../state";
const FinishOrder = () => {
  const [{ selectedCar }, dispatch] = useStateValue();

  return (
    <div className="finish-order">
      <h2>hello</h2>

      <p>{make}</p>
    </div>
  );
};

export default FinishOrder;
