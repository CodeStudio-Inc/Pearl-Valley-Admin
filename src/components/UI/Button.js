import React from 'react';

import './UI.scss';
const Button = (props) => {
	return (
		<div>
			<button className="btn" {...props}>
				{props.value}
			</button>
		</div>
	);
};

export default Button;
