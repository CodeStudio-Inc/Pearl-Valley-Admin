import React from 'react';
import arrow from '../UI/arrow.png';

const SelectBox = ({ clicked }) => {
	const selectedHandler = () => {
		const optionsContainer = document.querySelector('.options-container');
		optionsContainer.classList.add('show-select-box');
	};

	return (
		<div>
			<div className="select-box">
				<div className="options-container">
					<div className="option">
						<input type="radio" className="radio" id="edit" name="category" />
						<label for="edit">Edit </label>
					</div>
					<div className="option">
						<input type="radio" className="radio" id="delete" name="category" />
						<label for="delete" onClick={clicked}>
							Delete{' '}
						</label>
					</div>
				</div>
				<div className="selected" onClick={selectedHandler}>
					Edit Product
					<img src={arrow} />
				</div>
			</div>
		</div>
	);
};

export default SelectBox;
