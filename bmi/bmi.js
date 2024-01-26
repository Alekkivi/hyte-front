"use strict";

const lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;
const normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;
const highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;
const calculateIndexButton = document.querySelector(".calculate");

let analysis = document.querySelector(".analysis");
let bmiScore = document.querySelector(".bmi-score");
let highscore = document.querySelector(".highscore");
let lowestBmi = 10000;

// Check for button press
calculateIndexButton.addEventListener("click", function (evt) {
  validateBmiInput();
});

// Check for Enter to submit measurements
document.getElementById("weight").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      validateBmiInput();
    }
  });

document.getElementById("height").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    validateBmiInput();
  }
});


function validateBmiInput() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  resetPage();
  if (
    !weight ||
    !height ||
    isNaN(weight) ||
    isNaN(height) ||
    weight <= 0 ||
    height <= 0
  ) {
    analysis.textContent = "Tarkista syötetty pituus ja paino";
  } else {
    calculateBmi(weight, height);
  }
}

function calculateBmi(weight, height) {
  const bmi = (weight / ((height * height) / 10000)).toFixed(1);
  bmiScore.textContent = bmi;

  if (bmi < 19) {
    document.querySelector(".analysis").textContent = lowBmi;
    document.querySelector(".bmi0-19").classList.add("lowBmi");
  } else if (bmi > 25) {
    document.querySelector(".analysis").textContent = highBmi;
    document.querySelector(".bmi25-30").classList.add("highBmi");
  } else {
    console.log("Normaalipaino");
    document.querySelector(".analysis").textContent = normalBmi;
    document.querySelector(".bmi19-25").classList.add("normalBmi");
  }
  if (bmi < lowestBmi) {
    lowestBmi = bmi;
    highscore.textContent = lowestBmi;
  }
}

function resetPage() {
    bmiScore.textContent = 0;
    analysis.textContent = "";
  
    const bmiClasses = ["lowBmi", "normalBmi", "highBmi"];
  
    for (const className of bmiClasses) {
      const element = document.querySelector(`.${className}`);
      if (element) {
        element.classList.remove(className);
      }
    }
  }
  
