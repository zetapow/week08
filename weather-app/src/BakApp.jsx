import { useState, useEffect } from "react";
import "./App.css";

function App() {
   const [weatherData, setWeatherData] = useState(null);
      useEffect(() => {
      fetch(
         "http://api.weatherapi.com/v1/current.json?key=0bbf87f0fd724f3095c82017252603&q=Auckland&aqi=no"
      )
         .then((response) => response.json())
         .then((result) => {
            setWeatherData(result);
            // console.log("Loading complete:", result);

            //  console.log("Temperature (°C):", result.current.temp_c);
            //  console.log("City:", result.location.name);
         })
         .catch((error) => console.log("Error:", error));
   }, []);
   // On mount only
   useEffect(() => {
      console.table(weatherData);
   }, [weatherData]);

   return (
      <div>
        <button>Fetch Data</button>
         {/* {weatherData ? (
            <div>
               <h1>Weather in {weatherData.location.name}</h1>
               <p>Temperature (°C): {weatherData.current.temp_c}</p>
            </div>
         ) : (
            <p>Loading...</p>
         )} */}
      </div>
   );
}

export default App;

// async function fetchData() {
//   try {
//      // fetch data from API endpoint
//      const response = await fetch(
//         "http://api.weatherapi.com/v1/current.json?key=0bbf87f0fd724f3095c82017252603&q=Auckland&aqi=no"
//      );
//      if (!response.ok) throw new Error("Error:", response.status);
//      const result = await response.json();
//      console.log(result);
//   } catch (error) {
//      console.error("Error:", error);
//   }
//   return result;
// }
// fetchData();
