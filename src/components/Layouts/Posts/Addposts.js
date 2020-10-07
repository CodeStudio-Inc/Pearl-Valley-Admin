import React, { useState } from 'react';
import Navbar from '../../Routes/Nav/Navbar';
import SideBar from '../../Routes/Sidebar/Sidebar';
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
	const [ item, setProduct ] = useState('');
	const [ suk, setSuk ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ category, setCategory ] = useState('');

	const imageUploadHandler = async (event) => {
		if (event.target.files[0]) {
			const name = event.target.files[0].name;
			// console.log('image', name);
			try {
				const uploadImage = storage().ref();
				const _ref = uploadImage.child(`images/${name}`);
				_ref.put(event.target.files[0]).on(
					'state_changed',
					(snapshot) => {
						const progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
						setProgress(progress < 100 ? progress : 0);
						// console.log(progress);
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
		props.onPost(image, product, suk, price, description, category);
		setImage();
		setProduct('');
		setPrice('');
		setSuk('');
		setDescription('');
		setCategory('');
	};

	const product = item.toString();

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
					<h2>Add new product </h2>

					<div className="upload">
						<input type="file" placeholder="Choose featured Image" onChange={imageUploadHandler} />
						<p>Upload Product Image(JPEG file)</p>
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
						<div className="input_div">
							<input
								value={product}
								type="text"
								placeholder="Product"
								onChange={(e) => setProduct(e.target.value)}
							/>
							<input
								value={category}
								type="text"
								placeholder="Category"
								onChange={(e) => setCategory(e.target.value)}
							/>
							<input value={suk} type="text" placeholder="SKU" onChange={(e) => setSuk(e.target.value)} />
							<input
								value={price}
								type="text"
								placeholder="Price"
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<textarea
							value={description}
							placeholder="Production Description"
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
		onPost: (image, product, suk, price, description, category) =>
			dispatch(actions.addPost(image, product, suk, price, description, category))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Addposts);
