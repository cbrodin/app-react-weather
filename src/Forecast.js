import React from "react";
import ReactAnimatedWeather from "./ReactAnimatedWeather";
import "./Forecast.css";


export default function Forecast() {
  let apiKey = ``;

  return (
    <div className="Forecasted">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <ReactAnimatedWeather code="01d" size={32} />
          <div className="forecastTemps">
            <span className="forecastMin">87°</span>
            <span className="forecaseMax">97°</span>
          </div>
        </div>
      </div>
    </div>
  );

}