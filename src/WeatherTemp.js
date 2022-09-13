import React, { useState } from "react";

export default function WeatherTemp(props) {
const [unit,setUnit] = useState('fahrenheit');
if (unit === 'fahrenheit' ) {
  return ( <div className="WeatherTemp"> 
<span>{Math.round(props.fahrenheit)}°F</span>
<span className="barrier"> | </span>
<span className="celc"><a href="/" onClick={convertToCelsius}> °C </a></span>
  </div>); }
  else {

  }}