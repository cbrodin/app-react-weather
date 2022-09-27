import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props){
function maxTemp () {
  let tempMax = Math.round(props.data.temp.max);
  return `${tempMax}°`
}

function minTemp() {
  let tempMin= Math.round(props.data.temp.max);
  return `${tempMin}°`;
}

function day(){
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return days[day];
}

 return (
   <div className="forecastDay">
     {day()}
     <WeatherIcon code={forecast[0].weather[0].icon} size={32} />
     <div className="forecastTemps">
       <span className="forecastMin">{minTemp()}</span>
       <span className="forecaseMax">{maxTemp()}</span>
     </div>
   </div>
 ); 
}