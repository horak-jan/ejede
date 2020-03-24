import React from 'react';

import RegisterForm from '../components/ui/RegisterForm';

const Register = () => {
	return (
		<div className='auth-wrapp'>
			<div className='auth-main'>
				<h3>Register</h3>
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
