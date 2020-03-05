import React from 'react';
import './blog.css';

const Content = ({ post }) => {
	return(
		<div className='content'>
			<h4>{post.title}</h4>
			<p>{post.body}</p>
		</div>
	);
};

export default Content;