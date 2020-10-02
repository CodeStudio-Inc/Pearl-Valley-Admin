import { combineReducers } from 'redux';
import authReducer from './auth';
import updateReducer from './update';
import postReducer from './addPost';
import getPostReducer from './getPost';

export default combineReducers({
	auth: authReducer,
	update: updateReducer,
	post: postReducer,
	posts: getPostReducer
});
