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
      Cityinfo: {
        tag: null,
        place: null,
        low: null,
        high: null,
        weather: null
      }
    }
  }

  componentDidMount()
  {
    fetch('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=CWB-3A5C9611-3227-4637-AA5B-554962990E24&format=JSON')
    .then(resp=>console.log(resp))
  }
  // 這裡一定要用arrow function
  // 因為event是產生在 TaiwanMap onMouseOver
  // 我們是要改變 App 的 this.state 
  //（也就是 this 是 App 的！若不寫 arrow function 的話他會以為this.state是子層的，但子層是沒有state的唷）
  onCityChange = (e) => {
    const tagname = e.target.getAttribute('data-name')
    const filteredCitys = this.state.cities.filter(function (city) {
      return city.tag === tagname //tagname為相應svg圖層的縣市
      //把svg圖層縣市的json值放入filter出來的陣列filteredCitys
    })

    let filteredCity = filteredCitys[0] //我的json資料在陣列[0]
    if (filteredCity === undefined) { //如果到非縣市的svg圖層
      console.log('im null') 
      filteredCity = { //給他null值才不會整個壞掉
        tag: null,
        place: null,
        low: null,
        high: null,
        weather: null
      }
    }
    //console.log('選到的資料',filteredCity);
    this.setState({ Cityinfo: filteredCity })

  }
  render() {
    //console.log('state',this.state.Cityinfo);
    return (
      <div>
        <div className='title' >
          <h1>TAIWAN<br />WEATHER APP</h1>
            <hr />
          
          <CityInfo city={this.state.Cityinfo} />

        </div>
        {/*當滑鼠移到該縣市時觸發filter
             別忘了到子層新增監聽onMouseOver事件*/}
        <TaiwanMap onMouseOver={this.onCityChange} />

      </div>
    );
  }

}

export default App;
