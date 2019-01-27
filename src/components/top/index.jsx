import React, { Component } from 'react';
import Weather from '../weather/weather';
import './style.scss';
import '../../App.css'

class TopSection extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className="top-container">
                <div className="title">Weather Up</div>
                <Weather />
                <button className="btn btn-select-location">Select Location</button>
            </div>
        )
    }
}

export default TopSection;