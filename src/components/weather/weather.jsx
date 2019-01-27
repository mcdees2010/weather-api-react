import React, { Component } from 'react';
import SunImg from '../../resources/Sun.png';


class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="weather-container">
                <div className="header">Location Name</div>
                <div className="inner-container">
                    <div className="image"><img src={SunImg}/></div>
                    <div className="current-weather">10</div>
                </div>
                <div className="footer">Sunny</div>
            </div>
        )
    }
}

export default Weather;