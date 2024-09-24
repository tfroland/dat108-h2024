"use strict";

const rootElement = document.getElementById("root");
const inputElement = rootElement.querySelector("input");
//inputElement.value=123456;
const buttonElement = rootElement.querySelector("button");
const spanElement = rootElement.querySelector("span");
//spanElement.textContent="Velkommen til <em>DAT108</em>";

buttonElement.addEventListener("click", rullterning);

function rullterning() {
    const maksverdi = inputElement.value;
    const resultat = Math.floor(Math.random()*maksverdi) + 1;
    spanElement.textContent = resultat;
}

//document.body.textContent = "";