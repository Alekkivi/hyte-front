"use strict";

export async function getCat(element) {
  async function showCat() {
    console.log("Haetaan kuvat");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Error");
      const images = await response.json();
      const alt = images[1].name;
      const figurecap = images[1].description;
      const imagesrc = images[1].address;

      const i = document.querySelector("img");
      i.alt = alt;
      i.src = imagesrc;

      const figcap = document.querySelector("figcaption");
      figcap.innerText = figurecap;
    } catch (error) {
      console.log(error);
    }
  }

  async function createPics() {
    console.log("Luodaan kuvat lennossa");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Error");
      const images = await response.json();

      images.forEach((element) => {});

      const alt = images[1].name;
      const figurecap = images[1].description;
      const imagesrc = images[1].address;

      const cards = document.querySelector("#cards");
      cards.innerHTML = "";

      const new_figure = document.createElement("figure");
      cards.appendChild(new_figure);

      const new_image = document.createElement("img");
      new_image.src = imagesrc;
      new_image.alt = alt;
      new_figure.appendChild(new_image);

      const new_figcap = document.createElement("figcaption");
      const node = document.createTextNode(new_figcap)
      new_figcap.innerText = figurecap
      new_figure.appendChild(new_figcap);

    } catch (error) {
      console.log(error);
    }
  }

  async function createPicsLoops() {
    console.log("Luodaan kuvat lennossa");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Error");
      const images = await response.json();

      const cards = document.querySelector("#cards");
      cards.innerHTML = "";

      images.forEach((element) => {
        console.log(element)

      const new_figure = document.createElement("figure");
      cards.appendChild(new_figure);

      const new_image = document.createElement("img");
      new_image.src = element.address;
      new_image.alt = element.name;
      new_figure.appendChild(new_image);

      const new_figcap = document.createElement("figcaption");
      document.createTextNode(new_figcap)
      new_figcap.innerText = element.description
      new_figure.appendChild(new_figcap);
      
      });
    } catch (error) {
      console.log(error);
    }
  }
  element.addEventListener("click", () => createPicsLoops());
}
