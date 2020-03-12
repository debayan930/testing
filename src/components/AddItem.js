import React from 'react';

const AddItem = ({ value, addItem, handleChange, handleSelectChange, selectedFruit }) => {
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
			<select name="fruit" onChange={handleSelectChange} value={selectedFruit}>
				<option value="Apple">Apple</option>
				<option value='Mango'>Mango</option>
				<option value='Orange'>Orange</option>
				<option value='Banana'>Banana</option>
			</select>
			<input type='submit' value='Add'/>
		</form>
	);
};

export default AddItem;