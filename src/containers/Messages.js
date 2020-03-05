import React, { Component } from 'react';
import 'tachyons';
import MessageItem from '../components/MessageItem';

class Messages extends Component{
	constructor(){
		super();
		this.state = {
			unReadCount: 5,
			messages: Array(5).fill(false)
		}
		this.readMessage = this.readMessage.bind(this);
	}

	readMessage = (id) => {
		const arr = this.state.messages.slice();

		arr[id] = !this.state.messages[id];
		this.setState(
			{ 
				unReadCount: this.state.messages[id]?this.state.unReadCount+1:this.state.unReadCount-1,
				messages: arr
			}
		);
	}

	render(){
		const MessageList = this.state.messages.map((message, id) => {
			return <MessageItem id={id} onClick={() => this.readMessage(id)} isClicked={message}/>
		});

		return(
			<div className='tc'>
				<h1>Unread Messages Count: {this.state.unReadCount}</h1>
				{MessageList}
			</div>
		);
	}
};

export default Messages;