import React from 'react';
import WeatherDay from './WeatherDay';

const WeatherStrip = (props) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    return (
        <div className="weather-strip">
            <ul>
                {
                    props.stripData.slice(0, props.numDays).map((day, i) => {
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
};

export default WeatherStrip
