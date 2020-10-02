import axios from 'axios';
import * as actionTypes from '../Actions/Actions';

export const updateAction = () => {
	return {
		type: actionTypes.UPDATE_ACTION
	};
};

export const updateSuccess = (displayName, photoUrl, token) => {
	return {
		type: actionTypes.UPDATE_ACTION_SUCCESS,
		displayName,
		photoUrl,
		idToken: token
	};
};

export const updateFail = () => {
	return {
		type: actionTypes.UPDATE_ACTION_FAIL
	};
};

export const update = (displayName, photoUrl) => {
	return (dispatch, getState) => {
		dispatch(updateAction());
		// console.log('state', getState().auth.token);
		const updateData = {
			idToken: getState().auth.token,
			displayName: displayName,
			photoUrl: photoUrl,
			returnSecureToken: true
		};

		axios
			.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyADY8r04F8_KaEdvaUbX3Xe2zsHRB-Qc-A',
				updateData
			)
			.then((res) => {
				console.log('update', res);
				dispatch(updateSuccess(res.data.displayName, res.data.photoUrl, res.data.idToken));
			})
			.catch((error) => {
				console.log('update', error);
			});
	};
};
