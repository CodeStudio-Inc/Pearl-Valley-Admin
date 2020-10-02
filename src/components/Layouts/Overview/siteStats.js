import React from 'react';

import './Overview.scss';
const siteStats = () => {
	return (
		<div>
			<div className="overview-row">
				<div className="site-status">
					<div className="header">
						<h3>Site Status</h3>
					</div>
					<div className="content">
						<p>Site Staus</p>
					</div>
				</div>
				<div className="activity">
					<div className="header">
						<h3>Activity</h3>
					</div>
					<div className="content">
						<p>activity</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default siteStats;
