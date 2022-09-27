import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatheInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container-md">
        <div className="row align-items-start">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>
                    <strong>{props.data.city}</strong>
                  </h1>
                  <p>
                    <FormattedDate date={props.data.date} />
                  </p>
                  <p>
                    High: <span>{Math.round(props.data.high)}</span>°
                    <br />
                    Low: <span>{Math.round(props.data.low)}</span>°
                  </p>
                </div>
                <div className="col">
                  <h2 className="float-left">
                    <WeatherIcon code={props.data.icon} />
                    <span></span>
                  </h2>
                  <span></span>
                  <WeatherTemp faren={props.data.temp} />
                  <br />
                  <p>
                    {" "}
                    Humidity: <span>{props.data.humidity}</span>%
                    <br />
                    Wind: <span>{Math.round(props.data.wind)}</span> MPH
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className="weather-forcast"></div>
      </div>
    </div>
  );
}
