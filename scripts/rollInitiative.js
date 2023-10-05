"use strict";

import { numPlayers, winCon, players } from "./gameStartOptions.js";
import { smoothFadeIn } from "./helper.js";
import { FADE_TIME } from "./config.js";

const startGameBtn = document.querySelector("#start-game");
const rollInitiativeDiv = document.querySelector(".rollInitiative");
const rollInitiativeButtons = document.querySelectorAll(".rollInitiativeBtn");
const rollInitiativeContainer = document.querySelector(
  ".initiativeRollsContainer"
);
const rolls = [];

startGameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Fade in the next screen
  smoothFadeIn(rollInitiativeDiv, FADE_TIME, "flex");

  // Make that many rolls appear as there are players
  for (let i = 1; i <= numPlayers.value; i++) {
    let roll = document.querySelector(`.initiativeRoll--${i}`);
    let nameEl = roll.querySelector("div");
    nameEl.textContent = players[i - 1];
    smoothFadeIn(roll, FADE_TIME, "block");
  }
});
