import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/styles.css';
import Home from '../views/Home';
import Footer from '../views/Footer';
import Login from '../views/Login';
import Register from '../views/Register';
import Host from '../views/Host';
import Help from '../views/Help';
import User from '../views/User';
import Navbar from '../components/ui/Navbar';

import { StateProvider } from '../state';

const App = () => {
	const initialState = {
		auth: {
			isAuthenticated: false,
			token: '',
			username: ''
		}
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'authSuccess':
				return {
					...state,
					auth: {
						isAuthenticated: action.authenticated,
						token: action.resToken,
						username: action.setUsername
					}
				};
			case 'logout':
				return {
					...state,
					auth: {
						isAuthenticated: action.authenticated,
						token: action.resToken,
						username: action.setUsername
					}
				};
			default:
				return state;
		}
	};
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<Router>
				<div className='app'>
					<Navbar />

					<Switch>
						<Route exact path='/help' component={Help} />
						<Route exact path='/host' component={Host} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/user' component={User} />
						<Route exact path='/' component={Home} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</StateProvider>
	);
};

export default App;
