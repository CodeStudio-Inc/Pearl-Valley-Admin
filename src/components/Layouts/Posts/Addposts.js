import React, { useState, useEffect } from 'react';
import Navbar from '../../Routes/Nav/Navbar';
import SideBar from '../../Routes/Sidebar/Sidebar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';
import Button from '../../UI/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { storage } from 'firebase';
import './Posts.scss';

require('../../Store/Firebase');

const Addposts = (props) => {
	const [ image, setImage ] = useState();
	const [ progress, setProgress ] = useState(0);
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');

	const imageUploadHandler = async (event) => {
		if (event.target.files[0]) {
			const name = event.target.files[0].name;
			console.log('image', name);
			try {
				const uploadImage = storage().ref();
				const _ref = uploadImage.child(`images/${name}`);
				_ref.put(event.target.files[0]).on(
					'state_changed',
					(snapshot) => {
						const progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
						setProgress(progress < 100 ? progress : 0);
						console.log(progress);
					},
					(error) => {
						console.log('An error occured', error);
					},
					async () => {
						const url = await _ref.getDownloadURL();
						setImage(url);
					}
				);
			} catch (error) {
				console.log('Error uploading', error);
			}
		}
	};

	const onPostSubmit = (event) => {
		event.preventDefault();
		props.onPost(image, title, description);
		// setImage();
		setTitle('');
		setDescription('');
	};

	return (
		<div>
			<Navbar />
			<SideBar />
			<form onSubmit={onPostSubmit}>
				<div className="add_container">
					{props.error ? (
						<div className="error-container">
							<p>Post not added</p>
						</div>
					) : null}
					<h2>Add a new post </h2>

					<div className="upload">
						<input type="file" placeholder="Choose featured Image" onChange={imageUploadHandler} />
						<p>Choose post featured image</p>
						<img src={image} />
					</div>
					{progress > 0 && (
						<LinearProgress
							value={progress}
							variant="determinate"
							style={{ width: '20%' }}
							color="secondary"
						/>
					)}
					<div className="form_container">
						<input
							value={title}
							type="text"
							placeholder="Add Title"
							onChange={(e) => setTitle(e.target.value)}
						/>
						<textarea
							value={description}
							placeholder="start typing something"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<Button value="Publish" />
					</div>
					{props.loading ? (
						<LinearProgress style={{ width: '20%', marginTop: '1rem' }} color="secondary" />
					) : null}
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,
		loading: state.post.loading,
		error: state.post.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPost: (image, title, description) => dispatch(actions.addPost(image, title, description))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Addposts);
