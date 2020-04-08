import React from 'react';

const SingleHouse = (props) => {
	return (
		<div className='singleHouse'>
			<img src={props.house.image[0]} />
			<p>{props.house.beds} beds</p>
			<h4>{props.house.title}</h4>
			<p>{props.house.description.substr(0, 15)}...</p>
			<p>Kč{props.house.price} /noc</p>
		</div>
	);
};

export default SingleHouse;
