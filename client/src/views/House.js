import React from "react";

import { useStateValue } from "../state";
import Carousel from "../components/ui/Carousel";

const House = () => {
  const [{ selectedHouse }, dispatch] = useStateValue();

  let { make, year, model, seats, doors, range } = selectedCar;

  console.log(selectedCar);
  return (
    // <div className='houseView'>
    // 	<Carousel images={image} />
    // 	<div className='houseMain'>
    // 		<h2>{title}</h2>
    // 		<p>{address}</p>
    // 		<p>{city}</p>
    // 		<div className='smallText'>
    // 			<p>{guests}</p>
    // 			<p>{bedrooms}</p>
    // 			<p>{baths}</p>
    // 			<p>{beds}</p>
    // 		</div>
    // 		<hr />
    // 		<div className='houseInfo'>
    // 			<p>{description}</p>
    // 			<div className='details'>
    // 				<p>{pets}</p>
    // 				<p>{tv}</p>
    // 				<p>{kitchen}</p>
    // 				<p>{ac}</p>
    // 				<p>{smoking}</p>
    // 				<p>{wifi}</p>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
    <div>here</div>
  );
};

export default House;
