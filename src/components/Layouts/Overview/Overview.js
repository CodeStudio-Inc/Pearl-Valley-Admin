import React from 'react';
import Header from '../../Modals/Header';
import Navbar from '../../Routes/Nav/Navbar';
import Sidebar from '../../Routes/Sidebar/Sidebar';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SiteStats from './siteStats';

import './Overview.scss';
const Overview = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="overview-container">
				<Header title="Dashboard" post="Add post" page="Add page" />
				<div className="banner-div">
					<div className="banner-inner">
						<div className="welcome">
							<p>Welcome to StuwieDash!</p>
							<h6>We've assembled some links to get you started</h6>
						</div>
						<div className="steps">
							<h4>Next Steps</h4>
							<div className="steps-row">
								<NoteAddIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<p>Write your first blog</p>
							</div>
							<div className="steps-row">
								<AddIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<p>Add a page</p>
							</div>
							<div className="steps-row">
								<VisibilityIcon style={{ color: 'rgba(0,0,0,0.5)' }} />
								<p>Visit your site</p>
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

export default Overview;
