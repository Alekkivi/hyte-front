import './style.css';
import './minun-style.css';
import { getJoke } from './chuck-norris.js';

import { setupCounter } from './counter.js'
// import javascriptlogo from './javascript.svg'


document.querySelector('#app').innerHTML = 'Moi täällä ollaan'

const button = document.querySelector('.chuck')

button.addEventListener("click", async function(){
    let joke = await getJoke();
    document.querySelector(".show_joke").innerHTML = joke;
});


