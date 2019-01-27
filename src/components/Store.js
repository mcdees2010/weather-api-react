import React, { Component } from 'react';

class Store extends Component {
    constructor(){
        super(props);
        this.state = {
            appName: "Weather Up"
        }
    }
    render(){
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { ...this.state });
        })
    }
}

export default Store;