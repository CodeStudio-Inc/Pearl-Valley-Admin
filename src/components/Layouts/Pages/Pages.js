import React from 'react';
import Header from '../../Modals/Header';
import Navbar from '../../Routes/Nav/Navbar';
import Sidebar from '../../Routes/Sidebar/Sidebar';

import './Pages.scss';
const Pages = () => {
	const header = [ { label: 'Title' }, { label: 'Author' }, { label: 'Date' } ];
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="pages-container">
				<Header title="Pages" post="Add post" page="Add page" />
				<div className="table-container">
					<table>
						<tr className="table-header-row">{header.map((head) => <td>{head.label}</td>)}</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Pages;
