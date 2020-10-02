import React from 'react';
import Input from './Textfield';
import Button from './Button';
import CloseIcon from '@material-ui/icons/Close';

const modal = ({ value, changeHandler, submitHandler, close, icon }) => {
	return (
		<div>
			<form onSubmit={submitHandler}>
				{!close ? (
					<div className="modal-container">
						<div className="close-btn">
							<CloseIcon onClick={icon} />
						</div>
						<p>Change Username</p>
						<Input value={value} placeholder="Enter new Username" onChange={changeHandler} />
						<Button value="Save" />
					</div>
				) : null}
			</form>
		</div>
	);
};

export default modal;
