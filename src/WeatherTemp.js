import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemp">
        <span>{Math.round(props.faren)} °F</span>
        <span>
          {" "}
        </span>
      </div>
    );
  }
}
