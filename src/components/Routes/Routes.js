import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Nav/Navbar';
import PageRoutes from './PageRoutes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>{PageRoutes.map((route) => <Route {...route} key={Math.random()} />)}</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
