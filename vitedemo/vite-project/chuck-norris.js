"use strict";

export async function getJoke(element) {
  async function showJoke() {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) throw new Error("Huono haku");
      const jokes = await response.json();
      document.querySelector(".show_joke").innerHTML = jokes.value;
    } catch (error) {
      console.log(error);
    }
  }

  element.addEventListener("click", () => showJoke());
}
