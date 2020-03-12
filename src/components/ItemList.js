import React, { Component } from 'react';

class ItemList extends Component{
	constructor(props){
		super(props);
		this.state = {
			itemStateList: props.items.map(item => {
				return { item: item, status: false };
			})
		}
		this.toggleItem = this.toggleItem.bind(this);
	}

	toggleItem = (item) => {
		
	}

	render(){
		return(
			<div>

			</div>
		);
	}
};

export default ItemList;