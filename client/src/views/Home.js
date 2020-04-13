import React from 'react';
import HomeForm from '../components/ui/HomeForm';

const Home = () => {
	return (
		<div className='home'>
			<div className='home-form-wrapper'>
				<h2>Najdi ubytování v destinaci Ostrava na Ovabnb</h2>
				<p>Objev soukromé pokoje i celé nemovitosti ideální pro každý pobyt</p>
				<HomeForm />
			</div>
		</div>
	);
};

export default Home;
