import React, { useState, useEffect } from 'react';
import Header from '../../Modals/Header';
import './Posts.scss';
import Navbar from '../../Routes/Nav/Navbar';
import Sidebar from '../../Routes/Sidebar/Sidebar';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';
import LinearProgress from '@material-ui/core/LinearProgress';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import SelectBox from '../../UI/SelectBox';

const Posts = (props) => {
	const { posts } = props;
	useEffect(() => {
		props.onGetPost();
	}, []);

	const postsArray = props.posts || [];
	// console.log('myPosts', props.posts && props.posts);
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="post-container">
				<Header title="Products" post="Add New Product" />
				<div className="search_bar">
					<SearchIcon style={{ color: 'rgba(0,0,0,0.2)' }} />
					<input type="text" placeholder="product name" />
				</div>
				{props.loading ? (
					<LinearProgress style={{ width: '20%', marginTop: '1rem' }} color="secondary" />
				) : null}
				{postsArray.map((post) => (
					<div className="post_card">
						<img src={post.post.image} />
						<div className="post_desc">
							<h3>{post.post.product}</h3>
							<p>
								<strong>SUK </strong>
								{post.post.suk}
							</p>
							<p>{post.post.description}</p>
						</div>
						<div className="chevron_container">
							<div className="select_div">
								<div>
									<h3>Sh{post.post.price}</h3>
								</div>
								<div className="btn-div">
									<button onClick={() => props.deletePost(post.id)}>Delete</button>
								</div>

								{/* <SelectBox clicked={() => props.deletePost(post.id)} /> */}
							</div>
							<div>
								<ChevronRightIcon style={{ color: 'rgba(0,0,0,0.2)' }} />
							</div>
						</div>
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
		deletePost: (potstId) => dispatch(actions.deletePost(potstId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
