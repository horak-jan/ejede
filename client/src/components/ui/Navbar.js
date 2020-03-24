import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../state';

const Navbar = () => {
	const [{ auth }, dispatch] = useStateValue();

	const logout = async () => {
		try {
			dispatch({
				type: 'logout',
				authenticated: false,
				resToken: '',
				setUsername: ''
			});
		} catch (error) {
			console.log(error);
		}
	};

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
							<Link to='/' onClick={logout}>
								Log out
							</Link>
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
