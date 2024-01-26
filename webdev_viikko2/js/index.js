'use strict';

const contactSection = document.getElementById("Contact");
const main = document.querySelector("main")

// Create blueHeart
const blueHeartDiv = document.createElement("div");
const blueHeartImg = document.createElement("img");
blueHeartDiv.className = "blue-heart";
blueHeartImg.src = "images/blue-heart.png";
blueHeartImg.alt = "blue pixelated heart";

// Apply CSS to blueHeart
blueHeartImg.style.height = "80px";
blueHeartImg.style.position = "absolute";
blueHeartImg.style.top = "-35px";
blueHeartImg.style.right = "30px";

blueHeartDiv.appendChild(blueHeartImg);
contactSection.appendChild(blueHeartDiv);

// Create bomInfo
const browserLanguage = `Selaimen kieli: ${window.navigator.language} `;
const windowDimensions = `Näytön koko: ${window.screen.width} x ${window.screen.height}`;
const browserDimensions = `Selaimen ikkunan koko: ${window.innerWidth} x ${window.innerHeight}`;

const date = new Date();
const options = {year: 'numeric', month: 'long', day: 'numeric'};
const correctDateFormat = date.toLocaleDateString(window.navigator.language, options);
const timeInfo = `Päivämäärä ja aika: ${correctDateFormat} ja klo on ${date.getHours()}:${date.getMinutes()}`;

const allBomInfo = [browserLanguage, windowDimensions, browserDimensions,timeInfo]
const divElement = document.createElement("div");
const target = document.getElementById("target");

// CSS to div
divElement.style.position = "absolute"
divElement.style.left = "50%"
divElement.style.top = "50%"
divElement.style.width = "358px"
divElement.style.transform = "translate(-50%, -50%)"

for (const record of allBomInfo) {
    const p = document.createElement('p');
    p.innerText = record;
    divElement.appendChild(p);
}
target.appendChild(divElement);





