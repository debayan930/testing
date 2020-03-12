import React, { Component } from 'react';
import 'tachyons';
import AddItem from '../components/AddItem';
import '../components/blog.css';
import Basic from '../components/Basic';

class ToDoList extends Component{
	constructor(){
		super();
		this.state = {
			newItem: '',
			toDoItems: [],
			counter: 0,
			doneItems: 0,
			pendingItems: 0,
			selectedFruit: 'Apple'
		}
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
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

	handleSelectChange = (event) => {
		this.setState({ selectedFruit: event.target.value });
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
		const { newItem, toDoItems, selectedFruit } = this.state;
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
				<AddItem value={newItem} handleChange={this.handleChange} addItem={this.addItem} selectedFruit={selectedFruit} handleSelectChange={this.handleSelectChange} />
				<p className='tc'>Pending Items: {this.state.pendingItems}</p>
				<p className='tc'>Done Items: {this.state.doneItems}</p>
				<p className='tc'>selectedFruit: {this.state.selectedFruit}</p>
				<ul>
					{itemList}
				</ul>
				<Basic/>
			</div>
		);
	}
};

export default ToDoList;