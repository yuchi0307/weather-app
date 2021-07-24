import React from 'react';
import { ReactComponent as Map } from './map.svg';
import './MapColor.css';
// import { cities } from './cities.js'

const TaiwanMap =()=>{

//function	
const mouseOver = (e) => {
	//抓到svg的縣市區塊
	const tagname = e.target.getAttribute('data-name')
	console.log('svg:',tagname)
	//用假資料取代抓到的縣市區塊
	// const data = cities.filter(function(city){
	// 	return city.tag === tagname;
	// })
}

//return 的 內容	
	return(
		<Map className='App-map' onMouseOver={mouseOver}/>

	);
}

export default TaiwanMap;