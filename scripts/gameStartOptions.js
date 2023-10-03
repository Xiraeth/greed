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
let players = [];
let warningMsg = "";

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Flash the appropriate warning message when an input is not valid
  if (numPlayers.value == "" || winCon.value == "") {
    warningMsg = `You can't leave an input field empty...`;
    warningMsgFlash(nextWarningMsg, warningMsg, FADE_TIME);
  }
  if (numPlayers.value == "" || winCon.value == "") return;
  if (+winCon.value < 1000) {
    warningMsg = `Win condition points have to be greater than or equal to 1000`;
    warningMsgFlash(nextWarningMsg, warningMsg, FADE_TIME);
    return;
  }
  if (+winCon.value > 10000) {
    warningMsg = `Win condition points have to be less than or equal to 10000`;
    warningMsgFlash(nextWarningMsg, warningMsg, FADE_TIME);
    return;
  }
  if (+numPlayers.value < 2) {
    warningMsg = `You really gonna play by yourself?`;
    warningMsgFlash(nextWarningMsg, warningMsg, FADE_TIME);
    return;
  }
  if (+numPlayers.value > 4) {
    warningMsg = `Players can't be more than 4 chill`;
    warningMsgFlash(nextWarningMsg, warningMsg, FADE_TIME);
    return;
  }

  // Change visible form
  smoothFadeOut(initialForm, FADE_TIME);
  smoothFadeIn(nicknamesForm, FADE_TIME, "flex");

  // Display that many nickname input fields as there are users
  for (let i = 1; i <= +numPlayers.value; i++) {
    document
      .querySelector(`#player--${i}-name`)
      .closest("label")
      .classList.remove("hidden");
  }
  smoothFadeIn(arrowBackBtn, FADE_TIME, null);
});

startGameBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Flash a warning message when an input field is left empty
  for (let i = 1; i <= +numPlayers.value; i++) {
    if (document.querySelector(`#player--${i}-name`).value == "") {
      warningMsg = `You can't leave an input field empty...`;
      warningMsgFlash(startGameWarningMsg, warningMsg, FADE_TIME);
      return;
    } else {
      players.push(document.querySelector(`#player--${i}-name`).value);
    }
  }
  smoothFadeOut(nicknamesForm, FADE_TIME);
  smoothFadeOut(arrowBackBtn, FADE_TIME);

  document.body.style.backgroundImage = "url('images/table.jpg')";
});

arrowBackBtn.addEventListener("click", () => {
  // Change visible input form
  smoothFadeOut(nicknamesForm, FADE_TIME);
  smoothFadeOut(arrowBackBtn, FADE_TIME);
  smoothFadeIn(initialForm, FADE_TIME, "flex");

  // Reset the input fields for the number of players (hide them all)
  setTimeout(function () {
    for (let i = 1; i <= +numPlayers.value; i++) {
      document
        .querySelector(`#player--${i}-name`)
        .closest("label")
        .classList.add("hidden");
      document.querySelector(`#player--${i}-name`).value = "";
    }
  }, 500);

  players = [];
  warningMsg = "";
});
