import React from 'react';
import Header from '../../Modals/Header';
import Navbar from '../../Routes/Nav/Navbar';
import Sidebar from '../../Routes/Sidebar/Sidebar';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SiteStats from './siteStats';
import { withRouter } from 'react-router-dom';

import './Overview.scss';
const Overview = (props) => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="overview-container">
				<Header title="Overview" post="Add New Product" />
				<div className="banner-div">
					<div className="banner-inner">
						<div className="welcome">
							<p>Welcome to Pearl Valley!</p>
							<h6>We've assembled some links to get you started</h6>
						</div>
						<div className="steps">
							<h4>Next Steps</h4>
							{/* <div className="steps-row">
								<NoteAddIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<p>Write your first blog</p>
							</div> */}
							<div className="steps-row" onClick={() => props.history.push('/add')}>
								<AddIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<p>New Product</p>
							</div>
							<div className="steps-row">
								<VisibilityIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<a href="https://www.pearl-valley.com/" target="blank">
									Visit site
								</a>
							</div>
						</div>
						<div className="more">
							<h4>More Actions</h4>
							<p>Coming soon!</p>
						</div>
					</div>
				</div>
				<div className="stats">
					<SiteStats />
				</div>
			</div>
		</div>
	);
};

export default withRouter(Overview);
