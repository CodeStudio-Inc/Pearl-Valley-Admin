import * as actionTypes from '../Actions/Actions';
import axios from '../../Axios';

export const addPostAction = () => {
	return {
		type: actionTypes.ADD_POST_ACTION
	};
};

export const addPostActionSuccess = (postId) => {
	return {
		type: actionTypes.ADD_POST_ACTION_SUCCESS,
		name: postId
	};
};

export const addPostActionFail = (error) => {
	return {
		type: actionTypes.ADD_POST_ACTION_FAIL,
		error: error
	};
};

export const addPost = (image, title, description) => {
	return (dispatch) => {
		dispatch(addPostAction());

		const post = {
			image,
			title,
			description,
			date: new Date()
		};
		axios
			.post('/post.json', post)
			.then((res) => {
				console.log('response', res);
				dispatch(addPostActionSuccess(res.data.name));
			})
			.catch((error) => {
				console.log('response', error);
			});
	};
};
