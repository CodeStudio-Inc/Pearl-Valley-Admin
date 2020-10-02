import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './edit.scss';
const row = (props) => {
	return (
		<div className="row">
			<div className="inner-row">
				<h6>Email</h6>
				<p>None</p>
				<ChevronRightIcon />
			</div>
		</div>
	);
};

export default row;
