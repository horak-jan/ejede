import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import SingleHouse from '../components/ui/SingleHouse';
import BrowseButtons from '../components/ui/BrowseButtons';

const Browse = () => {
	const [houses, setHouses] = useState({});
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function getData() {
			setIsError(false);

			try {
				const res = await Axios.get(`/api/house?page=${page}`);
				setHouses(res.data);
			} catch (error) {
				setIsError(true);
			}
			setIsLoading(false);
		}

		getData();
	}, [page]);
	return (
		<div className='browse'>
			<h2>Pobyty v Ostravě</h2>

			{isError && <div>Something went wrong ...</div>}

			<div className='houseWrapper'>
				{isLoading ? (
					<div>'Loading...'</div>
				) : (
					houses.houses.map((house) => (
						<SingleHouse key={house._id} house={house} />
					))
				)}
			</div>
			<BrowseButtons
				setPage={setPage}
				page={houses.page}
				totalPages={houses.totalPages}
			/>
		</div>
	);
};

export default Browse;
