import React from 'react';
import './blog.css';

const SidebarItem = ({id, title, onClick}) => {
	return(
		<div
			className='sidebaritem'
			onClick={onClick}
		>
			{id}.&nbsp;{title}
		</div>
	);
};

export default SidebarItem;