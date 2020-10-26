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

	const submitHandler = async (event) => {
		event.preventDefault();
		await props.onAuth(email,password)
		console.log(props.token)
			if(props.token){
				props.history.push('./overview');
			}
	
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
		token: state.auth.token,
		username: state.auth.userName,
		loading: state.auth.loading,
		error: state.auth.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
