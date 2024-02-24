"use strict";

export async function getEntries(element) {
  async function createEntriesLoops() {
    console.log("Luodaan entries lennossa");
    try {
      const response = await fetch("http://localhost:3000/api/entries/4");
      if (!response.ok) throw new Error("Error");
      const entries = await response.json();

      const cardsContainer = document.querySelector(".card-area-entries");
      cardsContainer.classList.add("card-area");
      cardsContainer.innerHTML = ""; // Clear previous content

      entries.forEach((entry) => {
        console.log(entry);
        
        // Create card element
        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("div");
        cardImg.classList.add("card-img");
        const img = document.createElement("img");
        img.src = "./img/squat.jpg";
        img.alt = "Gym";
        cardImg.appendChild(img);

        // Right side with diary entry
        const cardDiary = document.createElement("div");
        cardDiary.classList.add("card-diary");
        const h4 = document.createElement("h4");
        const dateOnlyString = entry.entry_date.split("T")[0];
        h4.textContent = dateOnlyString;
        console.log(entry.notes);
        const p1 = document.createElement("p");
        p1.textContent = entry.notes;
        const p2 = document.createElement("p");
        p2.textContent = "Lue lisää";

        cardDiary.appendChild(h4);
        cardDiary.appendChild(p1);
        cardDiary.appendChild(p2);

        // Append left and right side to card
        card.appendChild(cardImg);
        card.appendChild(cardDiary);

        // Append card to cards container
        cardsContainer.appendChild(card);
      });
    } catch (error) {
      console.log(error);
    }
  }

  element.addEventListener("click", createEntriesLoops);
}
