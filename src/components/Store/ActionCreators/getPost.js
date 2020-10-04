import * as actionTypes from '../Actions/Actions';
import { db } from '../Firebase';

export const getPostAction = () => {
	return {
		type: actionTypes.GET_POST_ACTION
	};
};

export const getPostSuccess = (products) => {
	return {
		type: actionTypes.GET_POST_ACTION_SUCCESS,
		data: products
	};
};

export const getPostFail = () => {
	return {
		type: actionTypes.GET_POST_ACTION_FAIL
	};
};

export const getPost = () => {
	return (dispatch) => {
		try {
			dispatch(getPostAction());

			db.collection('stuwie-dash').onSnapshot((snapshot) => {
				const products = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					products.push({ id: doc.id, ...data });
					// console.log('Snapshot', doc.id);
				});
				// console.log('myProducts', products);
				dispatch(getPostSuccess(products));
			});
		} catch (error) {
			console.log(error);
		}
	};
};
