import * as actionTypes from '../Actions/Actions';
import axios from 'axios';

export const authAction = () => {
	return {
		type: actionTypes.AUTH_ACTION
	};
};

export const authSuccess = (token, userId, email) => {
	return {
		type: actionTypes.AUTH_ACTION_SUCCESS,
		idToken: token,
		userId: userId,
		email: email
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_ACTION_FAIL,
		error: error
	};
};

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const auth = (email, password, callback) => {
	return (dispatch) => {
		dispatch(authAction());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};

		axios
			.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADY8r04F8_KaEdvaUbX3Xe2zsHRB-Qc-A',
				authData
			)
			.then((res) => {
				// console.log(res);
				const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
				localStorage.setItem('token', res.data.idToken);
				localStorage.setItem('expirationDate', expirationDate);
				localStorage.setItem('userId', res.data.localId);
				dispatch(authSuccess(res.data.idToken, res.data.localId, res.data.email));
				dispatch(checkAuthTimeout(res.data.expiresIn));
				callback(res.data);
			})
			.catch((error) => {
				console.log(error);
				dispatch(authFail(error.message));
			});
	};
};

export const checkAuthState = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');

		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));

			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				const userId = localStorage.getItem('userId');
				dispatch(authSuccess(token, userId));
				dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime() / 1000));
			}
		}
	};
};
