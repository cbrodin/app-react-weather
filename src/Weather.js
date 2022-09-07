import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const[weatherData, setWeatherData] = useState({});
  setweatherData = {
    city: response.data.name,
    date: "Saturday",
    time: "7:00",
    high: "100",
    low: "89",
    humidity: response.data.main.humidity,
    wind: "5",
    feels: "101",
    faren: response.data.main.temp.imperial,
    cel: response.data.main.temp.metric,
  };
  return (
    <div className="Weather">
      <br />
      <form>
        <input placeholder="enter city name" />
        <button type="submit" className="btn btn-info">
          Search
        </button>
        <button type="button" className="btn btn-dark">
          Current
        </button>
      </form>
      <br />
      <div className="container-md">
        <div className="row align-items-start">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>
                    <strong>{weatherData.city}</strong>
                  </h1>
                  <p>
                    {weatherData.date} {weatherData.time}
                  </p>
                  <p>
                    High: <span>{weatherData.high}</span>°
                    <br />
                    Low: <span>{weatherData.low}</span>°
                  </p>
                </div>
                <div className="col">
                  <h2>
                    <img /> <span></span>
                  </h2>
                  <span></span>
                  <a href="#" className="active">
                    {" "}
                    {weatherData.faren} °F{" "}
                  </a>
                  <span className="barrier"> | </span>
                  <a href="#">{weatherData.cel} °C</a>
                  <p>
                    <br />
                    Humidity: <span>{weatherData.humidity}</span>%
                    <br />
                    Wind: <span>{weatherData.wind}</span> MPH
                    <br />
                    Feels Like: <span>{weatherData.feels}</span>°
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-forcast"></div>
    </div>
  );
}