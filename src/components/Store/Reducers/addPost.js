import * as actionTypes from '../Actions/Actions';
import { updateObject } from './utility';

const initialState = {
	postId: null,
	loading: false,
	error: false
};

const addPost = (state = initialState, action) => {
	switch (action.type) {
		//Add
		case actionTypes.ADD_POST_ACTION:
			return updateObject(state, {
				error: false,
				loading: true
			});
		case actionTypes.ADD_POST_ACTION_SUCCESS:
			return updateObject(state, {
				postId: action.name,
				loading: false,
				error: false
			});
		case actionTypes.ADD_POST_ACTION_FAIL:
			return updateObject(state, {
				loading: false,
				error: true
			});

		//Delete
		case actionTypes.DELETE_POST_ACTION:
			return updateObject(state, {
				error: null,
				loading: true
			});
		case actionTypes.DELETE_POST_ACTION_SUCCESS:
			return updateObject(state, {
				error: null,
				loading: false
			});
		case actionTypes.DELETE_POST_ACTION_FAIL:
			return updateObject(state, {
				error: true,
				loading: false
			});
		default:
			return state;
	}
};

export default addPost;
