import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = async data => {
		try {
			let res = await axios.post('/api/auth/register', {
				username: data.username,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password
			});

			console.log(res.data.message);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name='username'
					placeholder='Username'
					ref={register({ required: true, minLength: 3 })}
				/>
				<p className='red-text'>{errors.username && 'Username is required'}</p>

				<input
					name='firstName'
					placeholder='First name'
					ref={register({ required: true, minLength: 3 })}
				/>
				<p className='red-text'>
					{errors.firstName && 'First name is required'}
				</p>

				<input
					name='lastName'
					placeholder='Last name'
					ref={register({ required: true, minLength: 3 })}
				/>
				<p className='red-text'>
					{errors.lastName && 'Last name name is required'}
				</p>

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
				<p className='red-text'>{errors.password && 'Password is required'}</p>

				<input type='submit' />
			</form>
			<p className='helper'>
				Already have an account? Sign in <Link to='/login'>here.</Link>{' '}
			</p>
		</>
	);
};

export default RegisterForm;
