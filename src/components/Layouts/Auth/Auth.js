import React, { useState } from 'react';
import Button from '../../UI/Button';
import logo from '../../../assets/images/logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';
import LinearProgress from '@material-ui/core/LinearProgress';

import '../../UI/UI.scss';

const Auth = (props) => {
	const [ email, setEmail ] = useState('Stuartkal@gmail.com');
	const [ password, setPassword ] = useState('pass0123');

	const submitHandler = (event) => {
		event.preventDefault();
		props.onAuth(email, password, (response) => {
			console.log('response', response);
			if (response.localId) {
				props.history.push('./overview');
			}
		});
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="auth-container">
					{props.error ? (
						<div className="error-container">
							<p>Invalid log in details</p>
						</div>
					) : null}
					<img src={logo} alt="logo" />
					<div className="Input">
						<input
							className="inputElement"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="inputElement"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button value="Login" />
					{props.loading ? (
						<LinearProgress style={{ width: '20%', marginTop: '1rem' }} color="secondary" />
					) : null}
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,
		loading: state.auth.loading,
		error: state.auth.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password, callback) => dispatch(actions.auth(email, password, callback))
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
