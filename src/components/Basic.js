import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput';

const Basic = () => {
	return(
		<div className='tc'>
			<Formik
				initialValues={{
					username: "",
					password: ""
				}}
				validationSchema={Yup.object({
					username: Yup.string().max(20, "must be 20 characters or less").required("Required"),
					password: Yup.string().min(6, "must be 6 characters or more").required("Required")
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400)
				}}
			>
				<Form>
					<MyTextInput
						label="username"
						name="username"
						type="text"
						placeholder="Enter username..."
					/>
					<MyTextInput
						label="password"
						name="password"
						type="password"
						placeholder="Enter password..."
					/>
					<button type="Submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Basic;