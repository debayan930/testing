import React, { Component } from 'react';
import 'tachyons';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import '../components/blog.css';

class ToDoList extends Component{
	constructor(){
		super();
		this.state = {
			newItem: '',
			toDoItems: [],
			counter: 0,
			doneItems: 0,
			pendingItems: 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	addItem = (event) => {
		let toDoItems = this.state.toDoItems.slice();
		toDoItems.push({ item: this.state.newItem, id: this.state.counter, status: false });
		this.setState({ toDoItems: toDoItems, counter: this.state.counter+1, pendingItems: this.state.pendingItems+1 });
		event.preventDefault();
	}

	handleChange = (event) => {
		this.setState({ newItem: event.target.value.toUpperCase() });
	}

	toggleItem = (item) => {
		let { toDoItems } = this.state;
		for(let i=0;i<toDoItems.length;i++){
			if(toDoItems[i].id === item.id){
				toDoItems[i].status?this.setState({ doneItems: this.state.doneItems-1, pendingItems: this.state.pendingItems+1 }):this.setState({ doneItems: this.state.doneItems+1, pendingItems: this.state.pendingItems-1 });
				toDoItems[i].status = !toDoItems[i].status;
				break;
			}
		}
		this.setState({ toDoItems: toDoItems });
	}

	render(){
		const { newItem, toDoItems } = this.state;
		const itemList = toDoItems.map(item => {
			return(
				<li
					className={item.status?'doneItem':'pendingItem'}
					key={item.id}
					id={item.id}
					onClick={() => this.toggleItem(item)}
				>
					{item.item}
				</li>
			);
		});

		return(
			<div className='tc'>
				<AddItem value={newItem} handleChange={this.handleChange} addItem={this.addItem}/>
				<p>Pending Items: {this.state.pendingItems}</p>
				<p>Done Items: {this.state.doneItems}</p>
				<ul>
					{itemList}
				</ul>
			</div>
		);
	}
};

export default ToDoList;