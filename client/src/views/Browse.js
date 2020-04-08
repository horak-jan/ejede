import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import SingleHouse from '../components/ui/SingleHouse';
import BrowseButtons from '../components/ui/BrowseButtons';

const Browse = () => {
	const [houses, setHouses] = useState({});

	useEffect(() => {
		async function getData() {
			const res = await Axios.get('/api/house');
			setHouses(res.data);
		}

		getData();
	}, []);
	return (
		<div className='browse'>
			<h2>Pobyty v Ostravě</h2>
			<div className='houseWrapper'>
				{houses.houses === undefined
					? 'Loading...'
					: houses.houses.map((house) => (
							<SingleHouse key={house._id} house={house} />
					  ))}
			</div>
			<BrowseButtons page={houses.page} totalPages={houses.totalPages} />
		</div>
	);
};

export default Browse;
