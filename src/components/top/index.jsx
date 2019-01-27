import React, { Component } from 'react';
import Weather from '../weather/weather';
import './style.scss';

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
            </div>
        )
    }
}

export default TopSection;