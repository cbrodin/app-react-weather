import React, { useState } from "react";
import "./App.css";
import WeatheInfo from "./WeatherInfo";
import "./Weather.css";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      discription: response.data.weather[0].description,
      iconl: response.data.weather[0].icon,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.feelslike,
      faren: response.data.main.temp.imperial,
      cel: response.data.main.temp.metric,
    });
  }
function search() {    
  const apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
let city = "Austin";
let apiUrl = `http://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);}

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
        <br />
        <form onSubmit={handleSubmit}>
          <input 
          type="search"
          placeholder="enter city name" 
          className="form-control"
          autoFocus="on"
          onChange={handleCity}/>
          <button type="submit" className="btn btn-info">
            Search
          </button>
          <button type="button" className="btn btn-dark">
            Current
          </button>
        </form>
        <br />
        <WeatheInfo data={weatherData}/>
      </div>
    );
  }
  else {
search();
    return "Loading weather data...";
  }
}