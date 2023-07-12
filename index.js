"use strict";

const container = document.querySelector(".sketch-container");
const erase = document.querySelector(".erase");
const labelInputRange = document.querySelector(".label-input-range");
const adjustInput = document.querySelector(".adjust-input");
for (let i = 0; i < 256; i++) {
  let html = `<div class="box" name="box"></div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
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
