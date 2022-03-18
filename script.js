"use strict";
const emojis = [" 💊", " 💀", " 👻", " 👽", " 🤖", " 💣", " 🍺", "💃"];
const main = document.querySelector("main");

///Generar cartas aleatoriamente
function generarNumeroAleatorio(max) {
  const min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generarCartasRandom(arr) {
  let veces = 0;
  do {
    const myArr = [...arr];
    for (let i = myArr.length - 1; i >= 0; i--) {
      let numeroRandom = generarNumeroAleatorio(myArr.length - 1);
      let node = document.createElement("section");
      node.className = "card";
      node.innerHTML = `<div class="content"><div class="front"></div><div class="back">${myArr[numeroRandom]}</div></div>`;
      main.appendChild(node);
      myArr.splice(numeroRandom, 1);
    }
    veces++;
  } while (veces <= 1);
}

generarCartasRandom(emojis);

//LOGICA Y GIRO DE LAS CARTAS
const cards = document.querySelectorAll(".card");
const contador = document.querySelector("#contador");
let count = 0;
let num = 0;
let primeraCarta;
let segundaCarta;
let textoPrimeraCarta;
let textoSegundaCarta;

const reveal = (e) => {
  if (num < 2) {
    const currentCard = e.currentTarget;
    const textCard = currentCard.childNodes[0].childNodes[1].textContent;

    //Comprobamos que la carta seleccionada no este girada
    if (currentCard.className != "card flipped") {
      currentCard.classList.add("flipped");
      if (num < 1) {
        primeraCarta = currentCard;
        textoPrimeraCarta = textCard;
      } else {
        segundaCarta = currentCard;
        textoSegundaCarta = textCard;
      }
      num += 1;
      if (num == 2) {
        setTimeout(() => {
          if (textoPrimeraCarta != textoSegundaCarta) {
            primeraCarta.classList.remove("flipped");
            segundaCarta.classList.remove("flipped");
          }
          num = 0;
        }, 500);
        count++;
        contador.textContent = count;
      }
    }
  }
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}

/**
 * MODAL
 * MENU DE INSTRUCCIONES Y START
 */

const buttonStart = document.querySelector(".buttonStart");
const menuPrincipal = document.querySelector(".menuPrincipal");

buttonStart.addEventListener("click", function (e) {
  e.preventDefault();
  menuPrincipal.style.visibility = "hidden";
  temporizador();
});

/**
 * TEMPORIZADOR
 */

const tempText = document.querySelector(".temp");
let temp = 0;
let min = 0;
function temporizador() {
  setInterval(() => {
    temp++;
    if (temp == 59) {
      temp = 0;
      min++;
    }
    if (min == 0) {
      tempText.textContent = `${temp}s`;
    } else {
      tempText.textContent = `${min}m ${temp}s`;
    }
  }, 1000);
}
