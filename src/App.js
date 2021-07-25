import React ,{ Component }from 'react';
import './App.css';
import TaiwanMap from './TaiwanMap';
import CityInfo from './CityInfo.js'
import { cities } from './cities.js';

class App extends Component{
  constructor() {
    super()
    this.state = {
       cities: cities,
       cityinfo:''
    }
  }
// 這裡一定要用arrow function
// 因為event是產生在 TaiwanMap onMouseOver
// 我們是要改變 App 的 this.state 
//（也就是 this 是 App 的！若不寫 arrow function 的話他會以為this.state是子層的，但子層是沒有state的唷）
  onCityChange = (e) => { 
    const tagname = e.target.getAttribute('data-name')
    const filteredCity = this.state.cities.filter(function(city){
      return city.tag === tagname
    })
    this.setState({ cityinfo: filteredCity})

  }
  render(){
      return (
        <div>
            <div className='title' >
               <h1>TAIWAN<br/>WEATHER APP
               <hr />
               </h1>
               {/*依照state顯示json資料
                照理說 const filteredCity 應該寫在render之下return之上才讀得到
                但是被我的svg圖層event卡死QQ
                <CityInfo cities={filteredCity}/>
               */}
               <CityInfo place={cities[0].place}/>

             </div>
             {/*當滑鼠移到該縣市時觸發filter
             別忘了到子層新增監聽onMouseOver事件*/}
            <TaiwanMap onMouseOver={this.onCityChange}/>

        </div>
      );
  }

}

export default App;
