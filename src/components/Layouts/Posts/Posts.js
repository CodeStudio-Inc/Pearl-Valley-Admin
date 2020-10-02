import React, { useState, useEffect } from 'react';
import Header from '../../Modals/Header';
import './Posts.scss';
import Navbar from '../../Routes/Nav/Navbar';
import Sidebar from '../../Routes/Sidebar/Sidebar';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';
import LinearProgress from '@material-ui/core/LinearProgress';

const Posts = (props) => {
	const { posts } = props;
	useEffect(() => {
		props.onGetPost();
	}, []);

	const postsArray = Object.values(posts || {});
	console.log('myPosts', postsArray);
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="post-container">
				<Header title="Posts" post="Add post" page="Add page" />
				{props.loading ? (
					<LinearProgress style={{ width: '20%', marginTop: '1rem' }} color="secondary" />
				) : null}
				{postsArray.map((post) => (
					<div className="post_card">
						<img src={post.image} />
						<div className="post_desc">
							<h3>{post.title}</h3>
							<p>{post.description}</p>
						</div>
						<button onClick={props.onDelete()}>Delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		loading: state.posts.loading,
		posts: state.posts.posts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetPost: () => dispatch(actions.getPost()),
		onDelete: () => dispatch(actions.deletePost())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
