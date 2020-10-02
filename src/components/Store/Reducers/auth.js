import * as actionTypes from '../Actions/Actions';
import { updateObject } from './utility';

const initialState = {
	email: null,
	userId: null,
	token: null,
	error: null,
	loading: false
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_ACTION:
			return updateObject(state, {
				error: null,
				loading: true
			});
		case actionTypes.AUTH_ACTION_SUCCESS:
			return updateObject(state, {
				token: action.idToken,
				userId: action.userId,
				email: action.email,
				error: null,
				loading: false
			});
		case actionTypes.AUTH_ACTION_FAIL:
			return updateObject(state, {
				error: action.error,
				loading: false
			});
		case actionTypes.AUTH_LOGOUT:
			return updateObject(state, {
				token: null,
				userId: null
			});
		default:
			return state;
	}
};

export default auth;
