import * as actionTypes from '../Actions/Actions';
import { updateObject } from './utility';

const initialState = {
	posts: [],
	loading: false,
	error: false
};

const getPost = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_POST_ACTION:
			return updateObject(state, {
				loading: true,
				error: false
			});
		case actionTypes.GET_POST_ACTION_SUCCESS:
			return updateObject(state, {
				posts: action.data,
				loading: false,
				error: false
			});
		case actionTypes.GET_POST_ACTION_FAIL:
			return updateObject(state, {
				loading: false,
				error: true
			});
		default:
			return state;
	}
};

export default getPost;
