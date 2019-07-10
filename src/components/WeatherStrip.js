import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherStrip = (props) => {
    var moment = require('moment')
    return (
        <div className="weather-strip">
            <ul>
                {
                    props.stripData.slice(0, props.numCards).map((day, i) => {
                        const m = moment.unix(day["time"]);
                        const OFFSET = 3;
                        return <WeatherCard
                            key={i}
                            dayData={day}
                            time={`${m.format("ha")}-${m.add(OFFSET, 'hours').format("ha")}`}
                        />
                    })
                }
            </ul>
        </div>
    )
};

export default WeatherStrip
