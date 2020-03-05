import React from 'react';
import './MessageItem.css';

const MessageItem = ({ id, onClick, isClicked }) => {
	return(
		<h3 onClick={onClick} className={isClicked?'clicked':'notc'}>Message {id+1}</h3>
	);
};

export default MessageItem;