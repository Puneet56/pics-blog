import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';

import Users from './users/pages/Users';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Users />
				</Route>
				<Route exact path='/places/new'>
					<NewPlaces />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
