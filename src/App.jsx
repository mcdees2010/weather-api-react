import React, { Component } from 'react';
import './sass/app.scss';
import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import axios from 'axios';

const WEATHER_KEY = "9ea7e554427e40128ee10312192701";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: "London",
      forcastDays: 5
    }
  }
  componentDidMount(){
    const { cityName, forcastDays } = this.state;
    
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forcastDays}`;
    axios.get(URL).then((res) => {
      console.log(res);
    }).catch((err) => {
      if (err) console.log("cannot fetch weather data from api", err);
    })
  }
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection/>
          </div>
          <div className="bottom-section">
            <BottomSection/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
