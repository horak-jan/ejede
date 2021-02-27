import React from 'react';

const BrowseButtons = (props) => {
	let amountOfPages = props.totalPages;
	let amountOfButtons = [];
	for (let i = 1; i <= amountOfPages; i++) {
		amountOfButtons.push(i);
	}
	return (
		<div className='browse-buttons'>
			{amountOfButtons.map((number) =>
				number === props.page ? (
					<button style={{ color: 'rgb(255, 95, 90)' }} key={number}>
						{number}
					</button>
				) : (
					<button onClick={() => props.setPage(number)} key={number}>
						{number}
					</button>
				)
			)}
		</div>
	);
};

export default BrowseButtons;
