import React, { Component } from 'react';

class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.props.onTemperatureChange(event.target.value);
	}

	render(){
		const { scale, temperature } = this.props;
		return(
			<div className='tc'>
				<label htmlFor="temperature">Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}</label>
				<input
					type="number"
					value={temperature}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
};

export default TemperatureInput;