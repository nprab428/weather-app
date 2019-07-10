import React, { Component } from "react";
import WeatherStrip from "./components/WeatherStrip"
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      numCards: 3,
      city: "Chicago",
      data: null,
      error: false
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateNumCards = this.updateNumCards.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.setState({ city: event.target.value }, () => {
        this.fetchData()
      });
    }
  }

  updateNumCards(event) {
    this.setState({
      numCards: event.target.value,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const request = require("request")
    const credentials = require("./etc/credentials.json")
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=40&appid=${credentials.api_key}&units=imperial`

    this.setState({ loading: true, error: false });
    request(url, function (error, response, body) {
      if (error) {
        console.error("error:", error);
      }
      if (response) {
        console.log("statusCode:", response.statusCode);
        // Assume wrong city entered if 404 (TODO could handle more specific error codes)
        if (response.statusCode === 404) {
          this.setState({ error: true })
        }
        else {
          console.log("body", JSON.parse(body))
          this.setState({
            data: JSON.parse(body)["list"].map(d => {
              return {
                time: d["dt"],
                high: Math.round(d["main"]["temp_max"]),
                low: Math.round(d["main"]["temp_min"]),
                icon: d["weather"][0]["icon"]
              }
            }),
          })
        }
        this.setState({ loading: false })
      }
    }.bind(this));
  }

  renderResponse() {
    if (this.state.loading) {
      return (
        <div id="fountainG">
          {[...Array(8)]
            .map((_, index) => `fountainG_${index}`)
            .map((value) => <div key={value} id={value} className="fountainG"></div>
            )}
        </div>
      )
    }
    else if (this.state.error) {
      return (
        <div className="error">
          <p>"{this.state.city}" is not a valid city, please try again.</p>
        </div>
      )
    }
    else {
      return (
        <WeatherStrip
          loading={this.state.loading}
          stripData={this.state.data}
          numCards={this.state.numCards}
        />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Weather app</h1>
        <div className="form-row">
          <div className="city-container block">
            <label htmlFor="city">City: </label>
            <input type="text" defaultValue={this.state.city} id="city" onKeyDown={this.handleKeyDown}></input>
          </div>
          <div className="num-days-container block" onChange={event => this.updateNumCards(event)}>
            <label htmlFor="num_days_3">9 hours</label>
            <input type="radio" value="3" name="num_days" id="num_days_3" defaultChecked />
            <label htmlFor="num_days_5">15 hours</label>
            <input type="radio" value="5" name="num_days" id="num_days_5" />
          </div>
        </div>
        {this.renderResponse()}
      </div >
    );
  }
}
