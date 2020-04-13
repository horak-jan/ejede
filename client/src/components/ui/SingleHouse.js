import React from 'react';

const SingleHouse = (props) => {
	return (
		<div className='singleHouse'>
			<img src={props.house.image[0]} />
			<div className='singleHouseContent'>
				<div className='flex-offer'>
					<p>
						{props.house.beds}
						{props.house.beds > 1 ? ' postele' : ' postel'}
					</p>
					<p>{props.house.pets ? 'Zvířata povolena' : 'Bez zvířat'}</p>
				</div>
				<h4>{props.house.title}</h4>
				<p>{props.house.description.substr(0, 30)}...</p>
				<div className='flex-offer-second'>
					<p>{props.house.price}Kč / noc</p>
					<p>
						<button>
							<a href={`/house?${props.house._id}`}>Více informací</a>
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleHouse;
