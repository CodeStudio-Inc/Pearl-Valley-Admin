import * as actionTypes from '../Actions/Actions';
import { db } from '../Firebase';

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

export const addPost = (image, product, suk, price, description, category) => {
	return (dispatch) => {
		dispatch(addPostAction());

		const post = {
			image,
			product,
			suk,
			price,
			description,
			category,
			date: new Date()
		};

		db
			.collection('pearl-valley')
			.doc()
			.set(post)
			.then((res) => {
				// console.log('response', res);
				dispatch(addPostActionSuccess());
			})
			.catch((error) => {
				console.log('response', error);
			});
	};
};
