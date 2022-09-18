import React, { useState } from "react";
import "./App.css";
import WeatheInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconl: response.data.weather[0].icon,
    high: response.data.main.temp_max,
    low: response.data.main.temp_min,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    feels: response.data.feelslike,
    faren: response.data.main.temp,
    temp: response.data.main.temp,
    cel: response.data.main.temp.metric,
  });
}
function search() {
  const apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
  let city = "Austin";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault ();
    search(city);
  }
  function handleCity(event){
setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter city name"
            className="form-control"
            autoFocus="on"
            onChange={handleCity}
          />
          <input className="btn-search" type="submit" value="Search" />
        </form>
        <br />
        <WeatheInfo data={weatherData} />
        <Forecast />
      </div>
    );
  }
  else {
search();
    return "Loading weather data...";
  }
}