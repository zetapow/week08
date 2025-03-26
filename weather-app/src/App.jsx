// Import React hooks and CSS
import { useState, useEffect } from "react";
import "./App.css";

function App() {
   // Store weather data from API
   const [weatherData, setWeatherData] = useState(null);
   // Track user input in city field
   const [userCityInput, setUserCityInput] = useState("Auckland");


   const [currentCity, setCurrentCity] = useState('Auckland')

   function fetchWeather(userCityInput = "Auckland") {
      fetch(
         `https://api.weatherapi.com/v1/current.json?key=0bbf87f0fd724f3095c82017252603&q=${userCityInput}&aqi=no`
      )
         // convert response to JSON
         .then((response) => response.json())
         // handle response
         .then((result) => {
            console.log(result); // logs response
            console.log("Temperature: ", result.current.temp_c); //
            console.log("Location: ", result.location.name); //
            setWeatherData(result); // store date in state
         })
         // Handle error if any
         .catch((error) => console.error("Error", error));
   }

   // Runs on mount
   useEffect(() => {
      // default city input = auckland
      fetchWeather("Auckland");
      // log data stored in state
      console.log(weatherData);
   }, []);

   function handleChange(evt) {
      console.log(evt.target.value);
      // Update city input state to current input value
      setUserCityInput(evt.target.value);
   }

   function handleSubmit(evt) {
      // prevent default form behaviour
      evt.preventDefault();
      // fetchWeather for entered city
      fetchWeather(userCityInput);
      //Log submit event
      // console.log(evt);
      console.log("\u00B0");
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <h1>Weather App</h1>
            <label htmlFor="city">Enter a city: </label>
            {/* Update state on each keystroke */}
            <input id="city" type="text" onChange={handleChange} />
            <button type="submit">Get Data</button>
         </form>

         {/* Conditionally render weather data. Display only when weatherData is truthy */}
         {weatherData && (
            <div>
               <h3>{weatherData.location.name}</h3>
               <p>
                  It is currently {weatherData.current.temp_c} {"\u00b0"}C and{" "}
                  {weatherData.current.condition.text}
               </p>
               <img
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
               />
               <p>
                  Wind conditions: {weatherData.current.wind_kph} km/h heading{" "}
                  {weatherData.current.wind_dir}
               </p>
            </div>
         )}
      </>
   );
}

export default App;
