import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherStrip = (props) => {
    var moment = require('moment')
    return (
        <div className="weather-strip">
            <ul>
                {
                    props.stripData.slice(0, props.numCards).map((d, i) => {
                        const m = moment.unix(d["time"]);
                        const OFFSET = 3;
                        return <WeatherCard
                            key={i}
                            index={i}
                            isActive={i === props.activeIndex}
                            cardData={d}
                            time={`${m.format("ha")}-${m.add(OFFSET, "hours").format("ha")}`}
                            onClickDrilldown={props.onClickDrilldown}
                        />
                    })
                }
            </ul>
        </div>
    )
};

export default WeatherStrip;
