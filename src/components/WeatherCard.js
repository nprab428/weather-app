import React, { Component } from 'react';

export default class WeatherCard extends Component {
    onClickCard = () => {
        this.props.onClickDrilldown(this.props.index);
    }

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.props.cardData['icon']}@2x.png`
        const selectedClass = this.props.isActive ? "selected" : "";
        return (
            <li>
                <div className={`weather-card ${selectedClass}`} onClick={this.onClickCard}>
                    <p>{this.props.time}</p>
                    <img src={iconUrl} alt="Weather img" />
                    <p>High: {this.props.cardData["high"]}, Low: {this.props.cardData["low"]}</p>
                </div>
            </li>
        )
    }
}
