import React, { useState } from "react";

export default function WeatherTemp(props) {
const [unit,setUnit] = useState('fahrenheit');
function showFarenheit(event) {
  event.preventDefault(); 
  setUnit("farenheit");}

function showCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
}

if (unit === 'fahrenheit' ) {
  return ( <div className="WeatherTemp"> 
<span>{Math.round(props.fahrenheit)}{" "}°F</span>
<span> | {" "}<a href="/" onClick={showFarenheit}>℃</a></span>
  </div>); }
  else {
    let celsius= (props.celsius)(5 / 9) -32 ;
return (
  <div>
    <span>{Math.round(props.celsius)}</span>
    <span className="celc">
      <a href="/" onClick={showCelsius}>
        {" "}
        °C{" "}
      </a>
    </span>
  </div>
);
  }}