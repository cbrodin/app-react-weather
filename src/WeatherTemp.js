import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemp">
        <span>{Math.round(props.faren)} °F</span>
        <span>
          {" "}
          |{" "}
          <a href="/" onClick={showFarenheit}>
            ℃
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round((props.faren - 32) * (5 / 9))}</span>
        <span className="celc">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
        </span>
      </div>
    );
  }
}
