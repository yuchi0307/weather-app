import React from 'react';
import { cities } from './cities.js';
const CityInfo = ({ city }) => {
	return (
		<div>
			{city.place}
			<br />
			<h2>
				{city.weather}
			</h2>
			<h2>
				{city.high}
			</h2>
			<h2>
				{city.low}
			</h2>
		</div>

	);
}

export default CityInfo;