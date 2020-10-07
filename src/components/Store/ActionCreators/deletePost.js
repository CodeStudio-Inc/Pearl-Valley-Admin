import * as actionTypes from '../Actions/Actions';
import { db } from '../Firebase';

export const deletePostAction = () => {
	return {
		type: actionTypes.DELETE_POST_ACTION
	};
};

export const deletePostSuccess = (postId) => {
	return {
		type: actionTypes.DELETE_POST_ACTION_SUCCESS,
		data: postId
	};
};

export const deletePostFail = () => {
	return {
		type: actionTypes.DELETE_POST_ACTION_FAIL
	};
};

export const deletePost = (postId) => {
	// console.log('Postid', postId);
	return (dispatch) => {
		dispatch(deletePostAction());
		db
			.collection('pearl-valley')
			.doc(postId)
			.delete()
			.then((res) => {
				console.log('deleted', res);
				dispatch(deletePostSuccess(postId));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
