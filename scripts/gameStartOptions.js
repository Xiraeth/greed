"use strict";
import initialForm from "./welcome.js";
import { smoothFadeOut } from "./helper.js";

const initialFormInputs = document.querySelectorAll(".options input");
const startGameBtn = document.querySelector("#start-game");
const nicknamesForm = document.querySelector(".nicknames");
const assignNamesBtn = document.querySelector("#assign-names");
const nicknames = document.querySelectorAll(".nicknames input");
const startWarningMsg = document.querySelector(".start-warning");
const assignWarningMsg = document.querySelector(".assign-warning");

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (initialFormInputs[0].value == "") {
    startWarningMsg.style.opacity = "1";
    setTimeout(function () {
      startWarningMsg.style.opacity = "0";
    }, 2000);
  }
  if (initialFormInputs[0].value == "") return;
  smoothFadeOut(initialForm, nicknamesForm, 500);
});

assignNamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
