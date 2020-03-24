import React from 'react';

import LoginForm from '../components/ui/LoginForm';

const Login = () => {
	return (
		<div className='auth-wrapp'>
			<div className='auth-main'>
				<h3>Login</h3>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
