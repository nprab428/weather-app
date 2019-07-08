import React, { Component } from 'react';
import WeatherStrip from "./components/WeatherStrip"
import WeatherHeader from './components/WeatherHeader';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      numDays: 5,
      city: "Chicago",
      data: null,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const request = require('request')
    let apiKey = 'f65b98833ddeb2eb380ed34026819ca4'
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=5&appid=${apiKey}&units=imperial`

    this.setState({ loading: true });
    request(url, function (err, response, body) {
      if (err) {
        // TODO handle error state
        console.log('error:', err);
      } else {
        this.setState({
          data: JSON.parse(body)['list'].map(day => {
            return {
              high: Math.round(day['main']['temp_max']),
              low: Math.round(day['main']['temp_min']),
              icon: day['weather'][0]['icon']
            }
          }),
          loading: false
        })
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <WeatherHeader
          numDays={this.state.numDays}
          city={this.state.city}
        />
        <WeatherStrip
          loading={this.state.loading}
          stripData={this.state.data}
          numDays={this.state.numDays}
        />
      </div>
    );
  }
}
