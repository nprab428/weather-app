import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

export default class WeatherStrip extends Component {

    render() {
        if (this.props.loading) {
            return (
                <div className="loader">
                    <p>Loading...</p>
                </div>
            )
        }
        else {
            const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const d = new Date();
            return (
                <div className="weather-strip">
                    <ul>
                        {
                            this.props.stripData.slice(0, this.props.numDays).map((day, i) => {
                                return <WeatherDay
                                    key={i}
                                    dayData={day}
                                    dayOfWeek={weekdays[i + d.getDay()]}
                                />
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}
