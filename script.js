"use strict";
const numeros = [" 👹", " 💀", " 👻", " 👽", " 🤖", " 💣", " 💩", " 🌵"];
const main = document.querySelector("main");

///Generar cartas aleatoriamente
function generarNumeroAleatorio(max) {
    const min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeroRandom(arr) {
    let veces = 0;
    do {
        arr = [...numeros];
        for (let i = arr.length - 1; i >= 0; i--) {
            let nR = generarNumeroAleatorio(arr.length - 1);
            let node = document.createElement("section");
            node.className = "card";
            node.innerHTML = `<div class="content"><div class="front"> #>/<> </div><div class="back">${arr[nR]}</div></div>`;
            main.appendChild(node);
            arr.splice(nR, 1);
        }
        veces++;
    } while (veces <= 1);
}

numeroRandom(numeros);

/**
 * MODAL
 * MENU DE INSTRUCCIONES Y START
 */

const buttonStart = document.querySelector(".buttonStart");
const menuPrincipal = document.querySelector(".menuPrincipal");

buttonStart.addEventListener("click", function (e) {
    e.preventDefault();
    menuPrincipal.style.visibility = "hidden";
});
