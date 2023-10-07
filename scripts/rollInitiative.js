"use strict";

import { numPlayers, winCon, players } from "./gameStartOptions.js";
import { smoothFadeIn, createDiceRoll } from "./helper.js";
import { FADE_TIME } from "./config.js";

const startGameBtn = document.querySelector("#start-game");
const rollInitiativeDiv = document.querySelector(".rollInitiative");
const rollInitiativeContainer = document.querySelector(
  ".initiativeRollsContainer"
);
let count = 0;

startGameBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Fade in the next screen
  for (let i = 1; i <= +numPlayers.value; i++) {
    if (document.querySelector(`#player--${i}-name`).value == "") return;
  }
  smoothFadeIn(rollInitiativeDiv, FADE_TIME, "flex");

  // Make that many rolls appear as there are players
  for (let i = 1; i <= +numPlayers.value; i++) {
    let roll = document.querySelector(`.initiativeRoll--${i}`);
    let nameEl = roll.querySelector("div");
    nameEl.textContent = players[i - 1].name;
    smoothFadeIn(roll, FADE_TIME, "block");
  }
});

rollInitiativeContainer.addEventListener("click", (e) => {
  // Guard clause
  const btn = e.target.closest("button");
  if (!btn) return;

  const faSolid = btn.nextElementSibling;
  // "rolled" class is there to make sure each button is pressed only once
  // "count" is there so we can't keep rolling and adding classes to the <i> elements
  if (count < +numPlayers.value && !btn.classList.contains("rolled")) {
    const diceRoll = createDiceRoll();
    const playerRolled = btn.classList[0].slice(-1);
    players[playerRolled - 1].initiative = diceRoll.rollInt;
    faSolid.classList.add(`fa-dice-${diceRoll.rollString}`);
    btn.classList.add("rolled");
    count++;
  }
});
