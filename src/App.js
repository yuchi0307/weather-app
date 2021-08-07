import React, { Component } from 'react';
import './App.css';
import TaiwanMap from './TaiwanMap';
import CityInfo from './CityInfo.js'
import { cities } from './cities.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      cities: cities,
      //ApiCity: []
      Cityinfo: {
        tag: null,
        place: null,
        low: null,
        high: null,
        weather: null
      }
    }
  }

  // componentDidMount() {
  //   const url = 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=我的金鑰&format=JSON'
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ ApiCity: data.cwbopendata.dataset.location }))

  // }

  // 這裡一定要用arrow function
  // 因為event是產生在 TaiwanMap onMouseOver
  // 我們是要改變 App 的 this.state 
  //（也就是 this 是 App 的！若不寫 arrow function 的話他會以為this.state是子層的，但子層是沒有state的唷）
  onCityChange = (e) => {
    let tagname = e.target.getAttribute('data-name')
    tagname = tagname.replaceAll('\\', '%');

    const svgLocation = unescape(tagname) //解決svg應轉中文data-name回傳非unicode的問題
    console.log('解碼：', svgLocation) 

    //串假資料的部分
    //debugger
    const filteredCitys = this.state.cities.filter(function (city) {
      return city.place === svgLocation //tagname為相應svg圖層的縣市
      //把svg圖層縣市的json值放入filter出來的陣列filteredCitys
    })

   // if( svgLocation !== '圖層 1')
   // {
   //    const filteredCitys = this.state.ApiCity.filter(function (city) {
   //          return city.locationName === svgLocation
   //        })  
   let filteredCity = filteredCitys[0]
    if (filteredCity === undefined) {
      console.log('im null')
      filteredCity = {
        tag: null,
        place: null,
        low: null,
        high: null,
        weather: null
      }
    }
    console.log(filteredCity);
    this.setState({ Cityinfo: filteredCity })

    // this.setState({ ApiCity: filteredCity })
   //}
   // else
   // {
   //    console.log(':p')
   // }
 }

  
  render() {
    //console.log('state', this.state.ApiCity);
    console.log(this.state.Cityinfo);
    return (
      <div>
        <div className='title' >
          <h1>TAIWAN<br />WEATHER APP</h1>
          <hr />
          <CityInfo city={this.state.Cityinfo} />
          {/*<CityInfo city={this.state.ApiCity} />*/}

        </div>
        {/*當滑鼠移到該縣市時觸發filter
             到子層新增監聽onMouseOver事件*/}
        <TaiwanMap onMouseOver={this.onCityChange} />
      </div>
    );
  }

}



export default App;
