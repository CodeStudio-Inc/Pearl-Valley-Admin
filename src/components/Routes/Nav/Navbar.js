import React, { useEffect } from 'react';
import Logo from '../../../assets/images/logo.png';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';
import { withRouter } from 'react-router-dom';

import './Navbar.scss';
const Navbar = (props) => {
	useEffect(() => {
		props.onUpdate();
	}, []);

	const editHandler = () => {
		props.history.push('/edit');
	};
	return (
		<div className="nav-container">
			<div className="nav-row">
				<img src={Logo} alt="logo" className="logo" />
				<div>
					<p>
						Howdy,
						{props.userName ? (
							props.userName
						) : (
							<div>
								<button onClick={editHandler}>Edit profile</button>
							</div>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		userName: state.update.displayName
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onUpdate: (displayName, photoUrl) => dispatch(actions.update(displayName, photoUrl))
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
