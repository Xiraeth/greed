"use strict";
import initialForm from "./welcome.js";
import { smoothFadeOut, warningMsgFlash } from "./helper.js";
import { FADEOUT_TIME } from "./config.js";

const initialFormInputs = document.querySelectorAll(".options input");
const [numPlayers, winCon] = initialFormInputs;
const startGameBtn = document.querySelector("#start-game");
const nicknamesForm = document.querySelector(".nicknames");
const assignNamesBtn = document.querySelector("#assign-names");
const nicknames = document.querySelectorAll(".nicknames input");
const startWarningMsg = document.querySelector(".start-warning");
const assignWarningMsg = document.querySelector(".assign-warning");

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (numPlayers.value == "" || winCon.value == "") {
    const msg = `You can't leave an input field empty...`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
  }
  if (numPlayers.value == "" || winCon.value == "") return;
  else if (+winCon.value < 1000) {
    const msg = `Win condition points have to be greater than or equal to 1000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  } else if (+winCon.value > 10000) {
    const msg = `Win condition points have to be less than or equal to 10000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  smoothFadeOut(initialForm, nicknamesForm, FADEOUT_TIME);
});

assignNamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
