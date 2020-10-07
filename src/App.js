import React, { useEffect } from 'react';
import Routes from './components/Routes/Routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './components/Store/ActionCreators/';

function App(props) {
	useEffect(() => {
		props.checkAuthState();
	}, []);

	return (
		<div>
			<Routes />
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkAuthState: () => dispatch(actions.checkAuthState())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));
