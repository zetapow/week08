import { useState, useEffect } from "react";
import "./App.css";

function App() {
   const [weatherData, setWeatherData] = useState(null);
   const [userCity, setUserCity] = useState("Auckland");
   async function fetchData() {
      try {
         // fetch data from API endpoint
         const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=0bbf87f0fd724f3095c82017252603&q=${userCity}&aqi=no`
         );
         if (!response.ok) throw new Error(`Error: ${response.status}`);
         const result = await response.json();
         // console.log(result);
         setWeatherData(result);
      } catch (error) {
         console.error("Error:", error);
      }
   }
   // On mount only
   useEffect(() => {
      fetchData();
   }, [fetchData, userCity]);
   // }, [weatherData]);

   function handleChange(event) {
      console.log(event.target.value);
      const userInput = event.target.value;
      setUserCity(userInput);
   }

   function handleSubmit(event) {
      event.preventDefault();
      handleChange();
   }

   return (
      <div>
         <h1>Gimme the weather</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="city">Enter a city:</label>
            <input type="text" id="city" onChange={handleChange} />
            <button onClick={handleSubmit}>Fetch Data</button>
         </form>
         {weatherData && (
            <div>
               <h3>{weatherData.location.name}</h3>
               <h4>The temperature is {weatherData.current.temp_c}°C </h4>
               <p>It is: {weatherData.current.condition.text}</p>
               <img
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
               />
            </div>
         )}
      </div>
   );
}

export default App;
