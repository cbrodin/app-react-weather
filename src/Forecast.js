import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function Forecast() {
   let apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
   axios.get(apiUrl).then(displayWeatherCondition);
  return (
    <div className="Forecasted">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <WeatherIcon code="01d" size={32} />
          <div className="forecastTemps">
            <span className="forecastMin">87°</span>
            <span className="forecaseMax">97°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}