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

export const getPost = (search) => {
	return (dispatch) => {
		try {
			dispatch(getPostAction());

			if (search === '') {
				db.collection('pearl-valley').onSnapshot((snapshot) => {
					const products = [];
					snapshot.forEach((doc) => {
						const data = doc.data();
						products.push({ id: doc.id, ...data });
						// console.log('Snapshot', doc.data());
					});
					// console.log('myProducts', products);
					dispatch(getPostSuccess(products));
				});
			} else {
				db.collection('pearl-valley').where('category', '==', search).onSnapshot((snapshot) => {
					const products = [];
					snapshot.forEach((doc) => {
						const data = doc.data();
						products.push({ id: doc.id, ...data });
						// console.log('Snapshot', doc.data());
					});
					// console.log('myProducts', products);
					dispatch(getPostSuccess(products));
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getPostFilterFail = () => {
	return {
		type: actionTypes.GET_POST_FILTER_ACTION_FAIL
	};
};

export const getPostFilter = (search) => {
	return (dispatch) => {
		try {
			db.collection('pearl-valley').where('price', '==', search).onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log('my search result', doc.data());
				});
			});
		} catch (error) {
			console.log(error);
			dispatch(getPostFilterFail(error));
		}
	};
};
