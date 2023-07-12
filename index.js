"use strict";

const container = document.querySelector(".sketch-container");
const reset = document.querySelector(".reset");
const btnAdjustGridSize = document.querySelector(".adjust-grid");
const adjustInput = document.querySelector(".adjust-input");
const rowInput = document.querySelector(".row-input");
for (let i = 0; i < 256; i++) {
  let html = `<div class="box" name="box"></div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

container.addEventListener("mouseover", (e) => {
  if (e.target.className === "box") {
    e.target.classList.add("active");
  }
});

reset.addEventListener("click", () => {
  container.innerHTML = "";
  for (let i = 0; i < 256; i++) {
    let html = `<div class="box" name="box"></div>`;
    container.insertAdjacentHTML("afterbegin", html);
  }
});

function makeGrid(input) {
  container.style.gridTemplateColumns = `repeat (${input}, 1fr)`;
  container.style.gridTemplateRows = `repeat (${input}, 1fr)`;
  let grid = row * col;
  for (let i = 0; i < grid; i++) {
    let html = `<div class="box" name="box"></div>`;
    container.insertAdjacentHTML("beforeend", html);
  }
}

btnAdjustGridSize.addEventListener("click", () => {
  container.innerHTML = "";
  makeGrid(Number(adjustInput.value));
});
