import React from 'react';
import { ReactComponent as Map } from './map.svg';
import './MapColor.css';

const TaiwanMap =({onMouseOver})=>{
	return(
		<div>
			<Map className='App-map' onMouseOver={onMouseOver}/>
		</div>
	);
}

export default TaiwanMap;