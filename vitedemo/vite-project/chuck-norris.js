"use strict";

export async function getJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const joke = data.value;
      return joke;

    } catch (error) {
      console.error('Error:', error);
    }
  }