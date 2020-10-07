import React, { useState } from 'react';
import Sidebar from '../../Routes/Sidebar/Sidebar';
import Navbar from '../../Routes/Nav/Navbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Modal from '../../UI/modal';
import { connect } from 'react-redux';
import * as actions from '../../Store/ActionCreators';

import './edit.scss';

const Edit = (props) => {
	const [ displayName, setDisplayName ] = useState('');
	const [ photoUrl, setPhotoUrlName ] = useState('');
	const [ openModal, setOpenModal ] = useState(false);
	const [ closeModal, setCloseModal ] = useState(false);

	const updateProfile = (event) => {
		event.preventDefault();
		props.onUpdate(displayName, photoUrl);
		setCloseModal(true);
	};

	return (
		<div>
			{openModal ? (
				<Modal
					value={displayName}
					changeHandler={(e) => setDisplayName(e.target.value)}
					submitHandler={updateProfile}
					close={closeModal}
					icon={() => setCloseModal(true)}
				/>
			) : null}

			<Navbar />
			<Sidebar />
			<div className="edit-container">
				<div className="edit-header">
					<p>Profile</p>
					<h6>Edit your profile</h6>
				</div>
				<div className="row">
					<div className="inner-row" onClick={() => alert('Coming Soon')}>
						<h6>PHOTO</h6>
						<p>Add a photo to your account</p>
						<ChevronRightIcon />
					</div>
				</div>
				<div className="separator" />
				<div className="row">
					<div className="inner-row" onClick={() => setOpenModal(true)}>
						<h6>USERNAME</h6>
						<p>{!props.username ? 'Add User Name' : props.username}</p>
						<ChevronRightIcon onClick={() => setOpenModal(true)} />
					</div>
				</div>
				<div className="separator" />
				<div className="row">
					<div className="inner-row" onClick={() => alert('Email can only be set during signUp')}>
						<h6>Email</h6>
						<p>{props.email}</p>
						<ChevronRightIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		username: state.update.displayName,
		email: state.update.email
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdate: (displayName, photoUrl) => dispatch(actions.update(displayName, photoUrl))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
