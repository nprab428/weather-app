import React, { Component } from 'react';

export default class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: null,
        }
    }

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.props.dayData['icon']}@2x.png`
        return (
            <li>
                <div className='weather-day'>
                    <p>{this.props.time}</p>
                    <img src={iconUrl} alt="Weather img" />
                    <p>High: {this.props.dayData["high"]}, Low: {this.props.dayData["low"]}</p>
                </div>
            </li>
        )
    }
}
