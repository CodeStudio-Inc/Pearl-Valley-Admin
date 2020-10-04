import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// import CommentIcon from '@material-ui/icons/Comment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { withRouter } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = (props) => {
	const redirectToPosts = () => {
		props.history.push('./posts');
	};

	const redirectToDashboard = () => {
		props.history.push('/overview');
	};

	const redirectToPages = () => {
		props.history.push('/pages');
	};

	const redirectToComments = () => {
		props.history.push('/edit');
	};

	return (
		<div className="container">
			<div className="sidebar-column">
				<div className="hover-shadow">
					<div className="link-row" onClick={redirectToDashboard}>
						<DashboardIcon style={{ color: '#fff' }} />
						<p>Overview</p>
					</div>
				</div>
				<div className="hover-shadow">
					<div className="link-row" onClick={redirectToPosts}>
						<PostAddIcon style={{ color: '#fff' }} />
						<p>Products</p>
					</div>
				</div>
				{/* <div className="hover-shadow">
					<div className="link-row" onClick={redirectToPages}>
						<LibraryBooksIcon style={{ color: '#fff' }} />
						<p>Pages</p>
					</div>
				</div>
				<div className="hover-shadow">
					<div className="link-row" onClick={redirectToComments}>
						<CommentIcon style={{ color: '#fff' }} />
						<p>Comments</p>
					</div>
				</div> */}
			</div>
			<div className="logout-btn">
				<button type="submit">Logout</button>
			</div>
		</div>
	);
};

export default withRouter(Sidebar);
