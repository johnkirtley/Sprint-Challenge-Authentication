import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Jokes } from './components/Jokes';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
	return (
		<Switch>
			<PrivateRoute path='/jokes' component={Jokes} />
			<Route path='/' component={Home} />
		</Switch>
	);
}

export default App;
