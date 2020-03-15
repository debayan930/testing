import React, { Component } from 'react';
import TemperatureInput from '../components/TemperatureInput';
import BoilingVerdict from '../components/BoilingVerdict';
import 'tachyons';

class TemperatureCalculator extends Component{
	constructor(props){
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {
			temperature: '',
			scale: 'c'
		}
	}

	handleCelsiusChange = (temperature) => {
		this.setState({ scale: 'c', temperature });
	}

	handleFahrenheitChange = (temperature) => {
		this.setState({ scale: 'f', temperature });
	}

	tryToConvert = (temperature, convert) => {
		const input = parseFloat(temperature);
		if(Number.isNaN(input)){
			return '';
		}

		return convert(input);
	}

	toCelsius = (temperature) => {
		return 5*(temperature-32)/9;
	}

	toFahrenheit = (temperature) => {
		return (temperature*9/5) + 32;
	}

	render(){
		const { scale, temperature } = this.state;
		const celsius = scale === 'f' ? this.tryToConvert(temperature, this.toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? this.tryToConvert(temperature, this.toFahrenheit) : temperature;

		return(
			<div className='tc'>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>

				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>

				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
};

export default TemperatureCalculator;