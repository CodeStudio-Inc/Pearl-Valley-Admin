import React from 'react';

import './UI.scss';
const Textfield = (props) => {
	return (
		<div>
			<input className="input" {...props} />
		</div>
	);
};

export default Textfield;
