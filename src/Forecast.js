import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [wetforecast, setWetforecast] = useState (null);
function handleResponse(response){
  console.log(response.data)
  setWetforecast(response.data.daily)
  setLoaded (true);
}

 if (loaded) {
   return (
     <div className="Forecasted">
       <div className="row">
         <div className="col">
           <div className="forecastDay">Mon</div>
           <WeatherIcon code="01d" size={32} />
           <div className="forecastTemps">
             <span className="forecastMin">87°</span>
             <span className="forecaseMax">97°</span>
           </div>
         </div>
       </div>
     </div>
   );
 } else {
   let apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
   let longitude = props.coord.lon;
   let latitude = props.coord.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecallr?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

   axios.get(apiUrl).then(handleResponse);

   return null;
}
 }
  