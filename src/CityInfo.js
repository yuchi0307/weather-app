import React from 'react';
import { cities } from './cities.js';
const CityInfo= ({place, weather}) =>{
	return(
		<div>
		  {place}
		  <br/>
		  <h2>
		  {weather}
		  </h2>
		</div>

		);
}

export default CityInfo;