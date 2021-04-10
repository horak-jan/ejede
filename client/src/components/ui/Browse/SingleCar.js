import React from "react";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../../state";
import SingleCarContentText from "./SingleCarContentText";
import SingleCarContentTablet from "./SingleCarContentTablet.js";
import SingleCarContentPc from "./SingleCarContentPc";

const SingleCar = (props) => {
  let {
    make,
    year,
    dayPrice,
    model,
    color,
    price,
    seats,
    doors,
    rating,
    range,
    image,
  } = props.car;
  const [{ selectedCar }, dispatch] = useStateValue();
  let history = useHistory();

  const pickThisCar = async (data) => {
    try {
      dispatch({
        type: "pickCar",
        setCar: data,
      });

      //redirect to one car view
      history.push("/car");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singleCar">
      <h3>
        {make} {model}
      </h3>
      <p>
        JIŽ OD <span className="bold">{dayPrice}</span> Kč/DEN
      </p>
      <div className="singleCar-content">
        <div className="singleCar-content-img">
          <img src={image[0]} alt={make} />
          <SingleCarContentTablet />
          <SingleCarContentPc
            info={{ make, model, color, year, range, price, dayPrice, seats }}
          />
        </div>

        <SingleCarContentText seats={seats} doors={doors} range={range} />
        <div className="singleCar-bottom">
          <p>
            Zákaznické hodnocení <span className="bold">{rating}</span>/5
          </p>
          <button onClick={() => pickThisCar(props)}>Rezervovat</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
