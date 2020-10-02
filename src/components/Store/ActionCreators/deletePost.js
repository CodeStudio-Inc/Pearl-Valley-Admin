import * as actionTypes from '../Actions/Actions';
import axios from '../../Axios';

export const deletePostAction = () => {
	return {
		type: actionTypes.DELETE_POST_ACTION
	};
};

export const deletePostSuccess = (postId) => {
	return {
		type: actionTypes.DELETE_POST_ACTION_SUCCESS,
		name: postId
	};
};

export const deletePostFail = () => {
	return {
		type: actionTypes.DELETE_POST_ACTION_FAIL
	};
};

export const deletePost = (postId) => {
	return (dispatch) => {
		dispatch(deletePostAction());
		axios
			.delete(`/post/${postId}`)
			.then((res) => {
				console.log('deleted', res);
				dispatch(deletePostSuccess());
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
