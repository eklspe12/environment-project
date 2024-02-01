import AirSearch from './AirSearch';
import AQInfo from './AQInfo';
import AQCard from './AQCard';
import { useState } from 'react';
const AirQuality = ({ states }) => {
	const [visible, setVisible] = useState(false);
	const [city, setCity] = useState(null);
	const [aqNum, setAqNum] = useState(null);

	const aqi = [
		{
			value: 'Good',
			description:
				'Air quality is satisfactory, and air pollution poses little or no risk.',
			code: 'green',
		},
		{
			value: 'Moderate',
			description:
				'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
			code: 'Yellow',
		},
		{
			value: 'Unhealthy for Sensitive Groups',
			description:
				'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
			code: 'orange',
		},
		{
			value: 'Unhealthy',
			description:
				'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.',
			code: 'red',
		},
		{
			value: 'Very Unhealthy',
			description:
				'Health alert: The risk of health effects is increased for everyone.',
			code: 'Purple',
		},
		{
			value: 'Hazardous',
			description:
				'Health warning of emergency conditions: everyone is more likely to be affected.',
			code: 'Maroon',
		},
	];
	return (
		<div>
			<AQInfo />
			<AirSearch
				states={states}
				setVisible={setVisible}
				visible={visible}
				setCity={setCity}
				setAqNum={setAqNum}
			/>
			<AQCard aqi={aqi} visible={visible} city={city} aqNum={aqNum} />

			<h1>
				Page will contain first request user's location, then will use
				webscraping to find the current air quality of that location.
			</h1>
			<h1>
				Will also include a searchbar for users to search other locations.
			</h1>
			<h1>
				Components required: Searchbar, about text, information card, maybe
				alert for requesting location?
			</h1>
		</div>
	);
};

export default AirQuality;
