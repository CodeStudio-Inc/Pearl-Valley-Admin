import * as actionTypes from '../Actions/Actions';
import axios from '../../Axios';

export const getPostAction = () => {
	return {
		type: actionTypes.GET_POST_ACTION
	};
};

export const getPostSuccess = (posts) => {
	return {
		type: actionTypes.GET_POST_ACTION_SUCCESS,
		data: posts
	};
};

export const getPostFail = () => {
	return {
		type: actionTypes.GET_POST_ACTION_FAIL
	};
};

export const getPost = () => {
	return (dispatch) => {
		dispatch(getPostAction());

		axios
			.get('/post.json')
			.then((res) => {
				console.log(res);
				dispatch(getPostSuccess(res.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
