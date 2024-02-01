import {
	Input,
	Select,
	Button,
	Box,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const AirSearch = ({ states, setVisible, setCity, setAqNum }) => {
	const showCard = () => {
		setVisible(true);
	};

	const validationSchema = Yup.object().shape({
		city: Yup.string().required('City/Town is required'),
		state: Yup.string().required('State is required'),
	});

	const handleSubmit = async (values, action) => {
		try {
			const response = await fetch('/air_quality', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});
			if (!response.ok) {
				console.error('Backend response error:', response.statusText);
			} else {
				const responseData = await response.json();
				console.log('Backend responses:', responseData);
				const { city, air_quality_index: aqNum } = responseData.air_quality;
				setCity(city);
				setAqNum(aqNum);
				console.log(aqNum, city);
				showCard();
			}
		} catch (error) {
			console.error('Error sending data to backend:', error);
		} finally {
			action.setSubmitting(false);
		}
	};
	return (
		<Formik
			initialValues={{ city: '', state: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<Box mx="auto" w="30vw" display="flex" flexDirection="column">
					<FormControl isRequired>
						<FormLabel>Enter City/Town</FormLabel>
						<Input id="city" name="city" placeholder="City/Town" as={Field} />
						<ErrorMessage
							name="city"
							component="div"
							style={{ color: 'red' }}
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel>State</FormLabel>
						<Field name="state" as={Select} placeholder="Select State">
							{states.map((state) => (
								<option key={state.value} value={state.value}>
									{state.label}
								</option>
							))}
						</Field>
						<ErrorMessage
							name="state"
							component="div"
							style={{ color: 'red' }}
						/>
					</FormControl>

					<Button mt="4" mx="auto" type="submit">
						Check Air Quality
					</Button>
				</Box>
			</Form>
		</Formik>
	);
};

export default AirSearch;
