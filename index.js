"use strict";

const container = document.querySelector(".sketch-container");
const erase = document.querySelector(".erase");
const labelInputRange = document.querySelector(".label-input-range");
const adjustInput = document.querySelector(".adjust-input");
const inputRandomRBG = document.querySelector(".input-random-rbg");
for (let i = 0; i < 256; i++) {
  let html = `<div class="box" name="box"></div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

function randomRGB(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
container.addEventListener("mouseover", (e) => {
  if (inputRandomRBG.checked && e.target.classList.contains("box")) {
    const r = randomRGB(0, 255);
    const g = randomRGB(0, 255);
    const b = randomRGB(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    e.target.style.backgroundColor = rgb;
  }
  if (!inputRandomRBG.checked && e.target.classList.contains("box")) {
    e.target.classList.add("active");
  }
});

erase.addEventListener("click", () => {
  container.innerHTML = "";
  let input = adjustInput.value;
  makeGrid(input);
});

function makeGrid(input) {
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
  let grid = input * input;
  for (let i = 0; i < grid; i++) {
    let html = `<div class="box" name="box"></div>`;
    container.insertAdjacentHTML("beforeend", html);
  }
}

adjustInput.addEventListener("change", () => {
  let input = adjustInput.value;
  container.innerHTML = "";
  labelInputRange.textContent = `${input}x${input}`;
  makeGrid(Number(input));
});
