import React from 'react';
import './blog.css';

const ScrollBar = (props) => {
	return(
		<div className='scroll'>
			{props.children}
		</div>
	);
};

export default ScrollBar;