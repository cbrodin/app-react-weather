import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return ( <div className="card">
      <div className="main-contain">
        <br />
        <form>
          <input placeholder="enter city name" id="enterCity" />
          <button type="submit" className="btn btn-info" id="topSearch">
            Search
          </button>
          <button type="button" className="btn btn-dark" id="Use-Curr">
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
                    <h1 id="main"><strong></strong></h1>
                    <p id="currentDate">Sunday 5:40 PM</p>
                    <p>
                      High: <span id="mainHigh"></span>°
                      <br />
                      Low: <span id="mainLow"> </span>°
                    </p>
                  </div>
                  <div className="col">
                    <h2><img src="" id="tempEmoji"/> <span id="temp-descript"></span></h2>
                    <span id="currentTemp"></span
                    ><a href="#" id="fahrenheit" className="active"> °F </a
                    ><span className="barrier"> | </span
                    ><a href="#" id="celcius">°C</a>
                    <p>
                      <br />
                      Humidity: <span id="humid"></span>%
                      <br />
                      Wind: <span id="wind"></span> MPH
                      <br />
                      Feels Like: <span id="feelsLike"></span>°
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
        </div>
        <div className="weather-forcast" id="forecast"> </div>
        </div> ); } 
   <p><a href="https://github.com/cbrodin/weatherapp" id="EndCode"> Open Sourced Code</a> by Chelsea Brodin </p> 
