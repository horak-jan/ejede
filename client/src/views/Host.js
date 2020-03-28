import React from 'react';

import host from '../images/hosting.jpg';

const Host = () => {
	return (
		<div className='host'>
			<div className='top'>
				<div>
					<h3>Why host on Ova-bnb?</h3>
					<p>
						No matter what kind of home or room you have to share, Airbnb makes
						it simple and secure to host travelers. You’re in full control of
						your availability, prices, house rules, and how you interact with
						guests.
					</p>
				</div>
				<div>
					<h3>We have your back</h3>
					<p>
						To keep you, your home, and your belongings safe, we cover every
						booking with $1M USD in property damage protection and another $1M
						USD in insurance against accidents.
					</p>
				</div>
			</div>
			<h2>Hosting in 3 steps</h2>
			<div className='mid'>
				<div>
					<h3>List your space for free</h3>
					<p>
						Share any space without sign-up charges, from a shared living room
						to a second home and everything in-between.
					</p>
				</div>
				<div>
					<h3>Decide how you want to host</h3>
					<p>
						Choose your own schedule, prices, and requirements for guests. We’re
						there to help along the way.
					</p>
				</div>
				<div>
					<h3>Welcome your first guest</h3>
					<p>
						Once your listing is live, qualified guests can reach out. You can
						message them with any questions before their stay.
					</p>
				</div>
			</div>
			<div className='mid-bot'>
				<img src={host} />
				<p>
					The Host Guarantee helped me decide to join Airbnb because I have it
					to fall back on if there's damage or problems.
				</p>
				<p className='small-print'>
					Dennis hosts in London for the flexibility it provides
				</p>
				<button>Learn more</button>
			</div>
			<div className='bottom'>
				<h2>We have got you covered</h2>
				<p>
					We know it’s a priority to trust the people staying in your home.
					Airbnb allows you to set strict requirements for who can book and to
					get to know guests before their stay.
				</p>
				<p>
					If something does come up, though, we have your back. With our Host
					Guarantee covering property damage and our Host Protection Insurance
					for liability, you’re supported as a host throughout.
				</p>
			</div>
		</div>
	);
};

export default Host;
