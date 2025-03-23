"use strict";

// fetch("example.json")
//    // .then((response) => response.json())
//    .then((data) => data.json())
//    .then((data) => console.log(data))
//    .catch((error) => console.error("Fetch error", error));

/* Fetch API like a function. keyword fetch then path or URL to file
fetching data sends request and receives response

Async - so can try initial response before data available
.then waits for response and does something onces response received

receive response. Convert from JSON to true JS object or array - .json() (Response Object) https://developer.mozilla.org/en-US/docs/Web/API/Response
Response.json() - return new Response object for returning the provided JSON data

.then take final response and manipulate it (console.log in example)*/

const textElement = document.getElementById("text");
const display = document.getElementById("display");

// Fetch from local JSON file
const fetchData = () => {
   console.log("fetchData() clicked");
   fetch("example.json")
      .then((response) => response.json())
      .then((response) => console.table(response));
};

const fetchDataAndDisplay = () => {
   console.log("fetchDataAndDIsplay clicked");

   fetch("example.json")
      .then((people) => people.json())
      .then((people) => {
         display.innerHTML = ""; // Clear data in div

         people.forEach((person) => {
            display.innerHTML += `<p>${person.name} - Age: ${person.age}</p>`;
         });
      });
};

function fetchExternalAPIData() {
   fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => {
         display.innerHTML = "";

         response.data.forEach((person) => {
            display.innerHTML += `
            <div>
            <img src=${person.avatar} alt='Image of ${person.first_name}'>
            <p>${person.first_name} ${person.last_name}</p>
            </div>`;
         });
      });
}

function fetchPokemonAPI() {
   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      // .then((response) => console.log(response))
      .then((response) => {
         const pokeList = response.results;
         console.log(response);
         console.log(pokeList);
         display.innerHTML = ""; // Clear div

         pokeList.forEach((pokemon) => {
            const pokemonIndex = pokemon.url.split("/")[6];
            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

            display.innerHTML += `<div>
            <img src=${imgUrl}>
            <p>${pokemon.name}</p>
            </div>`;
         });
      });
}
{
   /* <img src=${pokemon} alt='Image of ${pokemon.name}'> */
}

function fetchCountryAPI() {
   fetch("https://restcountries.com/v3.1/name/New%20Zealand?fullText=true")
      .then((response) => response.json())
      .then((response) => {
         console.log(response); // Properties stored in array
         const countryData = response[0];
         display.innerHTML = ""; // Clear text

         console.log(countryData); // console logs object

         display.innerHTML += `
         <div>
         <h1>Country: ${countryData.name.common}</h1>
         <h3>Region: ${countryData.subregion}</h3>
         <h4>Capital: ${countryData.capital[0]}</h4>
         </div>
         `;
      });
}

// Perhaps change first letter to uppercase
function capFirstLetter(value) {
   return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function fetchNewCountryAPI() {
   const input = document.querySelector("#country");
   const countryInput = capFirstLetter(input.value.trim());
   console.log(countryInput);

   fetch(`https://restcountries.com/v3.1/name/${countryInput}?fullText=true`)
      .then((res) => res.json())
      .then((res) => {
         const countryData = res[0];
         display.innerHTML = ""; // Clear text

         console.log(countryData); // console logs object

         display.innerHTML += `
         <div>
         <h1>Country: ${countryData.name.common}</h1>
         <h3>Region: ${countryData.subregion}</h3>
         <h4>Capital: ${countryData.capital[0]}</h4>
         <p>Is UN member?: ${countryData.unMember}</p>
         </div>
         `;
      });
}
