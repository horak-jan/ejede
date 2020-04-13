import React from 'react';

const House = () => {
	let id = window.location.search;
	console.log(id);
	return (
		<div className='houseView'>
			<p>hello there</p>
		</div>
	);
};

export default House;
