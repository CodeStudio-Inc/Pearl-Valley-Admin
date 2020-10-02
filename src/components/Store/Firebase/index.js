import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyADY8r04F8_KaEdvaUbX3Xe2zsHRB-Qc-A',
	authDomain: 'stuwie-dash.firebaseapp.com',
	databaseURL: 'https://stuwie-dash.firebaseio.com',
	projectId: 'stuwie-dash',
	storageBucket: 'stuwie-dash.appspot.com',
	messagingSenderId: '358885580460',
	appId: '1:358885580460:web:19f2d0050b3fca63e48909',
	measurementId: 'G-X4WMRDD007'
};

export default firebase.initializeApp(firebaseConfig);
