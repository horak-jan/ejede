import React from "react";

const SingleCarContentPc = (props) => {
  const { dayPrice, color, range, seats, price } = props.info;
  return (
    <div className="singleCar-content-pc">
      <p>
        JIŽ OD <span className="bold">{dayPrice}</span> Kč/DEN
      </p>

      <div className="price">
        <div className="header">
          <p>2-3 dny</p>
          <p> 4-6 dní</p>
          <p>1 týden</p>
          <p>2 týdny</p>
          <p>1 měsíc</p>
          <p>3 měsíce a více</p>
        </div>
        <div className="price-listing">
          <p>{price[0]}</p>
          <p>{price[1]}</p>
          <p>{price[2]}</p>
          <p>{price[3]}</p>
          <p>{price[4]}</p>
          <p>{price[5]}</p>
        </div>
      </div>

      <div className="text">
        <p>
          {" "}
          <span className="bold">Barva: </span>
          {color}
        </p>
        <p>
          {" "}
          <span className="bold">Dojezd: </span>
          {range}
        </p>
        <p>
          {" "}
          <span className="bold">Klimatizace: </span>Ano
        </p>
        <p>
          {" "}
          <span className="bold">Počet míst: </span>
          {seats}
        </p>
        <p>
          {" "}
          <span className="bold">Převodovka: </span> Automatická
        </p>
      </div>
    </div>
  );
};

export default SingleCarContentPc;
