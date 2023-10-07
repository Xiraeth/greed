"use strict";

import {
  smoothFadeIn,
  createDiceRoll,
  changeColour,
  smoothFadeOut,
} from "./helper.js";
import { FADE_TIME } from "./config.js";
import { numPlayers, winCon, players } from "./gameStartOptions.js";

const rollInitiativeSection = document.querySelector(".rollInitiative");
const nextBtn = document.querySelector(".doneRollingInit");

nextBtn.addEventListener("click", (e) => {
  console.log(+numPlayers.value, +winCon.value, players);
  smoothFadeOut(rollInitiativeSection, FADE_TIME);
});
