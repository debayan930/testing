import React from 'react';
import { useField } from 'formik';

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return(
		<div className='tc'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='tc'>{meta.error}</div>
			): null}
		</div>
	);
};

export default MyTextInput;