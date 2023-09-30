"use strict";
import initialForm from "./welcome.js";
import { smoothFadeOut, warningMsgFlash } from "./helper.js";
import { FADEOUT_TIME } from "./config.js";

const initialFormInputs = document.querySelectorAll(".options input");
const startGameBtn = document.querySelector("#start-game");
const nicknamesForm = document.querySelector(".nicknames");
const assignNamesBtn = document.querySelector("#assign-names");
const nicknames = document.querySelectorAll(".nicknames input");
const startWarningMsg = document.querySelector(".start-warning");
const assignWarningMsg = document.querySelector(".assign-warning");

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (initialFormInputs[0].value == "" || initialFormInputs[1].value == "") {
    const msg = `You can't leave an input field empty...`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
  }
  if (initialFormInputs[0].value == "" || initialFormInputs[1].value == "")
    return;
  else if (+initialFormInputs[1].value < 1000) {
    const msg = `Win condition points have to be greater than or equal to 1000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  } else if (+initialFormInputs[1].value > 10000) {
    const msg = `Win condition points have to be less than or equal to 10000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  smoothFadeOut(initialForm, nicknamesForm, FADEOUT_TIME);
});

assignNamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
