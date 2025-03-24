"use strict";
console.log("all g");

// setTimeout(() => {
//    console.log("Inside: Hello I should be last");
// }, 1500);

// console.log("Outside: I should be first");

// Promise called coffee
const coffee = new Promise((resolve, reject) => {
   const milk = true;
   const coffee = false;

   if (milk && coffee) {
      // Promise fulfilled
      resolve("Coffee is served:");
   } else {
      // Promise failed
      reject("Operation failed");
   }
});

console.log(coffee);

// Gives way for async code to complete
coffee
   // called if promise resolved
   .then((result) => {
      // Promise fulfilled
      console.log(result, "Matcha Latte");
   })
   // called if promise rejected
   .catch((error) => {
      // handle error
      console.log(error, "Out of coffee");
   });

// Fetch API
console.log(fetch("https://jsonplaceholder.typicode.com/users"));
// pending - Promise state fulfilled- result - response

fetch("https://jsonplaceholder.typicode.com/users")
   // .then(
   //    (response) => console.log(response)
   //    // get PromiseResult
   // )
   // response.json() returns a promise
   .then((response) => response.json())
   // returns array in [PromiseResult] when promise fulfilled. use .then() method to get result. result as parameter
   .then((result) => console.log(result));

/*
fetch("https://pokeapi.co/api/v2/pokemon?limit=11")
   .then((response) => response.json())
   .then((result) => console.log(result.results))
   .catch((error) => console.log("Something went wrong", error));
*/

// fetch("https://jsonplaceholder.typicode.com/FAKEEE")
//    .then((response) => {
//       console.log(response);
//       // Check for errors in the response
//       if (!response.ok) {
//          throw new Error("Something went wrong!!!");
//       } // Parse the response as JSON
//       return response.json();
//    })
//    .then((data) => {
//       // Process the data
//       console.log(data);
//    })
//    .catch((error) => {
//       // Handle any errors that occurred
//       console.error(error);
//    });

fetch("https://jsonplaceholder.typicode.com/users/dsdsd")
   .then((response) => {
      console.log(response);
      if (!response.ok) {
         return new Error("Error, something went wrong");
      }
      return response.json();
   })
   .then((result) => console.log(result))
   // .catch((error) => console.error(error));
   .catch((error) => {
      return new Error("SOMETHING IS GOING WRONG- STAY CALM");
   });
// Fetch with promise
// fetch("https://jsonplaceholder.typicode.com/users")
//    .then((response) => response.json())
//    .then((result) => console.log(result));

// fetch with async & await
async function asyncFetch() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const result = await response.json();
   console.log(result);
}
// async await with arrow function?
const asyncArrow = async (
   url = "https://jsonplaceholder.typicode.com/users"
) => {
   const response = await fetch(url);
   const result = await response.json();
   console.log(result);
};

asyncFetch();
asyncArrow();

const asyncPokemon = async (url = "https://pokeapi.co/api/v2/pokemon/") => {
   try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.results);
   } catch (error) {
      console.error("Something went wrong", error);
   } finally {
      console.log("Goodbye");
   }
};
asyncPokemon();

// async function asyncPokemonFunc() {
//    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
//    const result = await response.json();
//    return console.log(result.results);
// }
// asyncPokemonFunc();
// asyncPokemon().catch((error) => console.error("Failed to load:", error));

// Await can only be used within async
async function callBadFetch() {
   try {
      const myFetch = await fetch("https://www.goooooooogle.com");
      console.log(myFetch);
   } catch (err) {
      console.log(err);
      console.error("something wrong with the server");
   }
}
callBadFetch();
