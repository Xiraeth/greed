"use strict";
import initialForm from "./welcome.js";
import { smoothFadeOut, smoothFadeIn, warningMsgFlash } from "./helper.js";
import { FADE_TIME } from "./config.js";

const initialFormInputs = document.querySelectorAll(".options input");
let [numPlayers, winCon] = initialFormInputs;
const nextBtn = document.querySelector("#next");
const arrowBackBtn = document.querySelector(".fa-arrow-left");
const nicknamesForm = document.querySelector(".nicknames");
const nextWarningMsg = document.querySelector(".next-warning");
const startGameBtn = document.querySelector("#start-game");
const startGameWarningMsg = document.querySelector(".start-warning");
const players = [];

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (numPlayers.value == "" || winCon.value == "") {
    const msg = `You can't leave an input field empty...`;
    warningMsgFlash(nextWarningMsg, msg, FADE_TIME);
  }
  if (numPlayers.value == "" || winCon.value == "") return;
  if (+winCon.value < 1000) {
    const msg = `Win condition points have to be greater than or equal to 1000`;
    warningMsgFlash(nextWarningMsg, msg, FADE_TIME);
    return;
  }
  if (+winCon.value > 10000) {
    const msg = `Win condition points have to be less than or equal to 10000`;
    warningMsgFlash(nextWarningMsg, msg, FADE_TIME);
    return;
  }
  if (+numPlayers.value < 2) {
    const msg = `You really gonna play by yourself?`;
    warningMsgFlash(nextWarningMsg, msg, FADE_TIME);
    return;
  }
  if (+numPlayers.value > 4) {
    const msg = `Players can't be more than 4 chill`;
    warningMsgFlash(nextWarningMsg, msg, FADE_TIME);
    return;
  }
  smoothFadeOut(initialForm, FADE_TIME);
  smoothFadeIn(nicknamesForm, FADE_TIME, "flex");

  for (let i = 1; i <= +numPlayers.value; i++) {
    document
      .querySelector(`#player--${i}-name`)
      .closest("label")
      .classList.remove("hidden");
  }
  console.log(numPlayers.value, winCon.value);
  smoothFadeIn(arrowBackBtn, FADE_TIME, null);
});

startGameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 1; i <= +numPlayers.value; i++) {
    if (document.querySelector(`#player--${i}-name`).value == "") {
      const msg = `You can't leave an input field empty...`;
      warningMsgFlash(startGameWarningMsg, msg, FADE_TIME);
      return;
    } else {
      players.push(document.querySelector(`#player--${i}-name`).value);
    }
  }
  smoothFadeOut(nicknamesForm, FADE_TIME);
});

arrowBackBtn.addEventListener("click", () => {
  smoothFadeOut(nicknamesForm, FADE_TIME);
  smoothFadeIn(initialForm, FADE_TIME, "flex");
  smoothFadeOut(arrowBackBtn, FADE_TIME);
});
