import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let apiKey = 'f65b98833ddeb2eb380ed34026819ca4'
let city = 'Chicago'
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}&units=imperial`

const request = require('request')
request(url, function (err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        window.body = JSON.parse(body);
        console.log('body:', JSON.parse(body));

    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
