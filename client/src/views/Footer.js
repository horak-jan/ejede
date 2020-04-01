import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-large'>
				<div className='footer-head'>ABOUT</div>
				<ul className='one-fourth'>
					<li>Diversity & Belonging</li>
					<li>Accessibility</li>
					<li>Trust & Safety</li>
					<li>Airbnb Citizen</li>
					<li>Newsroom</li>
				</ul>
			</div>

			<div className='footer-large'>
				<div className='footer-head'>COMMUNITY</div>
				<ul className='one-fourth'>
					<li>Airbnb Magazine</li>
					<li>Airbnb for Work</li>
					<li>Invite friends</li>
					<li>Gift cards</li>
					<li>Careers</li>
				</ul>
			</div>

			<div className='footer-large'>
				<div className='footer-head'>HOST</div>
				<ul className='one-fourth'>
					<li>Host your home</li>
					<li>Host an experience</li>
					<li>Responsible hosting</li>
					<li>Open Homes</li>
					<li>Olympics</li>
					<li>Resource Center</li>
				</ul>
			</div>

			<div className='footer-large'>
				<div className='footer-head'>SUPPORT</div>
				<ul className='one-fourth'>
					<li>Help center</li>
					<li>Neighborhood Support</li>
				</ul>
			</div>
			<div className='footer-bottom'>2020 Ovabnb, Inc. All rights reserved</div>
		</div>
	);
};

export default Footer;
