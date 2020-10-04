import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withRouter } from 'react-router-dom';
import './Modals.scss';
const Header = (props) => {
	const postHandler = () => {
		props.history.push('/add');
	};

	return (
		<div className="container-header">
			<h2>{props.title}</h2>
			<div className="header_links">
				<div onClick={postHandler} className="header_link">
					<AddCircleIcon />
					<p>{props.post}</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
