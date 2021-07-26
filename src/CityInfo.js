import React from 'react';

const CityInfo = ({ city }) => {

if(city.low===null)
{
	return null;
}
	return (
		<div>
			{city.locationName}<br />
			{city.low}~{city.high}
			<h2>{city.weather}</h2>

		</div>

	);
}

export default CityInfo;