import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://stuwie-dash.firebaseio.com/'
});

export default instance;
