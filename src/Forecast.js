import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Weather.css";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [wetforecast, setWetforecast] = useState (null);

useEffect(() =>{  setLoaded(false);},[props.coord]);

function handleResponse(response){
setWetforecast(response.data.daily);
  setLoaded (true);
}
function load(){   let apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
let longitude = props.coord.lon;
let latitude = props.coord.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(handleResponse);}

 if (loaded) {
   return (
  <div class="Forecasted">
    <div class="col"></div>
         <div className="col">
           <ForecastDay data={wetforecast[1]} />
           <div className="col">
             <ForecastDay data={wetforecast[2]} />
           </div>
           <div className="col">
             <ForecastDay data={wetforecast[3]} />
           </div>
           <div className="col">
             <ForecastDay data={wetforecast[4]} />
           </div>
           <div className="col">
             <ForecastDay data={wetforecast[5]} />
           </div>
         </div>
       </div>
   );
 } else {
load ();
   return null;
}
 }
  