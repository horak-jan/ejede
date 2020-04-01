import React from 'react';
import HomeForm from '../components/ui/HomeForm';

const Home = () => {
	return (
		<div className='home'>
			<h2>Najdi ubytování v destinaci Ostrava na Airbnb</h2>
			<p>Objev soukromé pokoje i celé nemovitosti ideální pro každý pobyt</p>
			<HomeForm />
		</div>
	);
};

export default Home;
