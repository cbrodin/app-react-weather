import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [wetforecast, setWetforecast] = useState (null);


function handleResponse(response){
setWetforecast(response.data.daily);
  setLoaded (true);
}

 if (loaded) {
   return (
     <div className="Forecasted">
       <div className="row">
         <div className="col">
           <ForecastDay data={wetforecast[0]} />{" "}
         </div>
         <div className="col">
           <ForecastDay data={wetforecast[1]} />{" "}
         </div>{" "}
         <div className="col">
           <ForecastDay data={wetforecast[2]} />{" "}
         </div>{" "}
         <div className="col">
           <ForecastDay data={wetforecast[3]} />{" "}
         </div>{" "}
         <div className="col">
           <ForecastDay data={wetforecast[4]} />{" "}
         </div>
       </div>
     </div>
   );
 } else {
   let apiKey = "40ee9c494fa4d6774c1dda0bb71d8806";
   let longitude = props.coord.lon;
   let latitude = props.coord.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
   
   axios.get(apiUrl).then(handleResponse);

   return null;
}
 }
  