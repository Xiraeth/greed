"use strict";

import { numPlayers, winCon, players } from "./gameStartOptions.js";
import { smoothFadeIn, createDiceRoll, changeColour } from "./helper.js";
import { FADE_TIME } from "./config.js";

const startGameBtn = document.querySelector("#start-game");
const rollInitiativeSection = document.querySelector(".rollInitiative");
const rollInitiativeContainer = document.querySelector(
  ".initiativeRollsContainer"
);
const nextBtn = document.querySelector(".doneRollingInit");
let count = 0;

const sortPlayersArr = (arr) => arr.sort((a, b) => b.initiative - a.initiative);

startGameBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Fade in the next screen
  for (let i = 1; i <= +numPlayers.value; i++) {
    if (document.querySelector(`#player--${i}-name`).value == "") return;
  }
  smoothFadeIn(rollInitiativeSection, FADE_TIME, "flex");

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

  const initiativeDiv = btn.nextElementSibling;

  // "rolled" class is there to make sure each button is pressed only once
  // "count" is there so we can't keep rolling and adding classes to the <i> elements
  if (count < +numPlayers.value && !btn.classList.contains("rolled")) {
    let diceRoll = createDiceRoll();

    // Determine which button was pressed
    let playerRolledIndex = btn.classList[0].slice(-1) - 1;
    players[playerRolledIndex].initiative = diceRoll;

    initiativeDiv.textContent = diceRoll;
    btn.classList.add("rolled");
    count++;

    // Style number's colour depending on it's magnitude:
    initiativeDiv.style.color = changeColour(diceRoll);

    // Show the 'next' button when all players are done rolling
    if (count == +numPlayers.value) {
      smoothFadeIn(nextBtn, FADE_TIME, "block");
    }
  }

  // Sort the array be descending initiative
  sortPlayersArr(players);
});
