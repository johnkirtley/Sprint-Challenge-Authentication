import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Home = props => {
	const [login, setLogin] = useState({
		login: {
			username: '',
			password: ''
		}
	});

	const handleChanges = e => {
		setLogin({
			...login,
			[e.target.name]: e.target.value
		});
		console.log(login);
	};

	const submit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:3300/api/auth/login', login)
			.then(res => {
				console.log(res);
				window.localStorage.setItem('token', res.data.token);
				props.history.push('/jokes');
			})
			.catch(err => {
				console.log('axiosWithAuth error', err);
			});
	};

	return (
		<div>
			<form onSubmit={submit}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					value={login.username}
					onChange={handleChanges}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='text'
					name='password'
					value={login.password}
					onChange={handleChanges}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};
