import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather-updated";


export default function WeatheInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="container-md">
          <div className="row align-items-start">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1>
                      <strong>{props.data.city}</strong>
                    </h1>
                    <p>
                      <FormattedDate date={props.weatherData.date} />
                    </p>
                    <p>
                      High: <span>{props.weatherData.high}</span>°
                      <br />
                      Low: <span>{props.weatherData.low}</span>°
                    </p>
                  </div>
                  <div className="col">
                    <h2 className="float-left">
                      <ReactAnimatedWeather
                        code={props.data.icon}
                        alt={props.data.description}
                      />
                      <span></span>
                    </h2>
                    <span></span>
                    <a href="#" className="active">
                      {" "}
                      {props.weatherData.faren} °F{" "}
                    </a>
                    <span className="barrier"> | </span>
                    <a href="#">{props.weatherData.cel} °C</a>
                    <p>
                      <br />
                      Humidity: <span>{props.weatherData.humidity}</span>%
                      <br />
                      Wind: <span>{props.weatherData.wind}</span> MPH
                      <br />
                      Feels Like: <span>{props.weatherData.feels}</span>°
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
