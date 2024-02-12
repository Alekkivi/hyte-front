// fetch('https://api.example.com/data')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Verkkovastaus ei ollut kunnossa');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('Fetch-operaatiossa ilmeni ongelma:', error);
//   });

"use strict";
console.log("the script starts");

function synchronousFunction() {
  let number = 1;
  for (let i = 1; i < 10000; i++) {
    number += i;
    console.log("synchronousFunction running");
  }
  console.log("regular function complete", number);
}

function synchronousFunction2() {
  console.log("VIHDOIN");
}

// Vanha huono tapa
async function asynchronousFunction() {
  console.log("Async haku alkaa");

  // Fetch(url, (options))

  // haetaan ilman async rankennetta perinteisesti käyttäen .then notaatiota.
  fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Verkkovastaus ei ollut kunnossa");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch-operaatiossa ilmeni ongelma:", error);
    });
}

async function asynchronousFunction2() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");

    // Parsee datan json muotoon
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

async function getOwnData() {
  try {
    const response = await fetch("http://127.0.0.1:3000/items");

    // Parsee datan json muotoon
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

async function postToOwnApi() {
  try {
    const response = await fetch("http://127.0.0.1:3000/items", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "JavaItemi",
      }),
    });
    // TODO Virheen tarkastus
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

async function main() {
    try{
        await getOwnData();
        await postToOwnApi();
        await getOwnData();
    } catch(error){
        console.log('error')
    }
}

// main();
// synchronousFunction();
// synchronousFunction2();
// asynchronousFunction();
// asynchronousFunction2();
// postToOwnApi();
// getOwnData();
