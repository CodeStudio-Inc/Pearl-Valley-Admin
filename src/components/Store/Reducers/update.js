import * as actionTypes from '../Actions/Actions';
import { updateObject } from './utility';

const initialState = {
	displayName: null,
	email: null,
	photoUrl: null,
	token: null,
	loading: false,
	error: null
};

const update = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_ACTION:
			return updateObject(state, {
				loading: true
			});
		case actionTypes.UPDATE_ACTION_SUCCESS:
			return updateObject(state, {
				displayName: action.displayName,
				email: action.email,
				photoUrl: action.photoUrl,
				token: action.idToken,
				loading: false
			});
		case actionTypes.UPDATE_ACTION_FAIL:
			return updateObject(state, {
				error: action.error,
				loading: false
			});
		default:
			return state;
	}
};

export default update;
