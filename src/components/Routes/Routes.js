import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Overview from '../Layouts/Overview/Overview';
import Posts from '../Layouts/Posts/Posts';
import Auth from '../Layouts/Auth/Auth';
import Edit from '../Layouts/EditProfile/Edit';
import AddPost from '../Layouts/Posts/Addposts';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Auth}/>
					<Route  path="/overview" component={Overview}/>
					<Route  path="/posts" component={Posts}/>
					<Route  path="/edit" component={Edit}/>
					<Route path="/add" component={AddPost}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
