import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../state';

const Navbar = () => {
	const [{ auth }, dispatch] = useStateValue();

	return (
		<nav className='nav'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/host'>Host a home</Link>
				</li>
				<li>
					<Link to='/help'>Help</Link>
				</li>
				{auth.isAuthenticated ? (
					<>
						<li>
							<Link to='/user'>{auth.username}</Link>
						</li>
						<li>
							<Link to='/'>Log out</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/register'>Sign up</Link>
						</li>
						<li>
							<Link to='/login'>Log in</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
