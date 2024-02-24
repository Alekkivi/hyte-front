import "./style.css";
import "./minun-style.css";
import { getJoke } from "./chuck-norris.js";
import { getCat } from "./catpics.js";
import { getEntries } from "./entries.js";

import { setupCounter } from "./counter.js";
// import javascriptlogo from './javascript.svg'

document.querySelector("#app").innerHTML = "Moi täällä ollaan";

const element = document.querySelector(".chuck");
getJoke(element);

const element2 = document.querySelector(".show_cat");
getCat(element2);

const element3 = document.querySelector(".show_entries");
getEntries(element3);
