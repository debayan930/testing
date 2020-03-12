import React from 'react';

const AddItem = ({ value, addItem, handleChange }) => {
	return(
		<form onSubmit={addItem}>
			<input
				type='text'
				name='item'
				value={value}
				placeholder='Add to-do...'
				onChange={handleChange}
			/>
			<br/>
			<input type='submit' value='Add'/>
		</form>
	);
};

export default AddItem;