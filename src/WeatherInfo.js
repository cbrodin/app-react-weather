import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather-updated";
import WeatherTemp from "./WeatherTemp";

export default function WeatheInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <div className="container-md">
        <div className="row align-items-start">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>
                    <strong>
                      {props.data.city}
                    </strong>
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
                    <ReactAnimatedWeather code={props.data.icon} />
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
                    <br />
                    Feels Like: <span>{props.data.feels}</span>°
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-forcast"></div>
      </div>
    </div>
  );
}
