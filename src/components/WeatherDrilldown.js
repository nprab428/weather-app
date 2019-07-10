import React from 'react';

const renderEntries = (data) => {
    return (
        <>
            <li>Description: {data["description"]}</li>
            <li>Humidity: {data["humidity"]}%</li>
            <li>Cloudy: {data["cloudy"]}%</li>
            <li>Wind: {data["wind"]} mph</li>
        </>
    )
};

const WeatherDrilldown = (props) => {
    return (
        <div className="weather-drilldown">
            <ul>
                {renderEntries(props.drilldownData)}
            </ul>
        </div>
    )
};

export default WeatherDrilldown;
