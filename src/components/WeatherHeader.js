import React from 'react';

const WeatherHeader = (props) => {
    return (
        <h1 className="weather-header">
            {props.city} {props.numDays}-day forecast
        </h1>
    )
};

export default WeatherHeader;
