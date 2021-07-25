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
  // 這裡一定要用arrow function
  // 因為event是產生在 TaiwanMap onMouseOver
  // 我們是要改變 App 的 this.state 
  //（也就是 this 是 App 的！若不寫 arrow function 的話他會以為this.state是子層的，但子層是沒有state的唷）
  onCityChange = (e) => {
    const tagname = e.target.getAttribute('data-name')
    const filteredCitys = this.state.cities.filter(function (city) {
      return city.tag === tagname
    })
    console.log("onCityChange");
    let filteredCity = filteredCitys[0]
    if (filteredCity === undefined) {
      console.log("im null")
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

  }
  render() {
    console.log("onreander");
    console.log(this.state.Cityinfo);
    return (
      <div>
        <div className='title' >
          <h1>TAIWAN<br />WEATHER APP
            <hr />
          </h1>
          {/*依照state顯示json資料
                照理說 const filteredCity 應該寫在render之下return之上才讀得到
                但是被我的svg圖層event卡死QQ
                <CityInfo cities={filteredCity}/>
               */}
          <CityInfo place={this.state.Cityinfo.place} />

        </div>
        {/*當滑鼠移到該縣市時觸發filter
             別忘了到子層新增監聽onMouseOver事件*/}
        <TaiwanMap onMouseOver={this.onCityChange} />

      </div>
    );
  }

}

export default App;
