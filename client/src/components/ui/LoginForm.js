import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import { useStateValue } from '../../state';

const LoginForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const [{ auth }, dispatch] = useStateValue();

	const onSubmit = async data => {
		try {
			let res = await axios.post('/api/auth/login', {
				email: data.email,
				password: data.password
			});

			console.log(res);

			dispatch({
				type: 'authSuccess',
				authenticated: true,
				resToken: res.data.token,
				setUsername: res.data.user.username
			});
		} catch (error) {
			console.log(error.response.data.error.email);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				name='email'
				placeholder='Email'
				ref={register({ required: true, minLength: 9 })}
			/>
			<p className='red-text'>{errors.email && 'Email name is required'}</p>

			<input
				name='password'
				type='password'
				placeholder='Password'
				ref={register({ required: true, minLength: 8 })}
			/>
			<p className='red-text'>{errors.password && 'Paassword is required'}</p>
			<input type='submit' />
		</form>
	);
};

export default LoginForm;
