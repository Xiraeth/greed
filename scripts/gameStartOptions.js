"use strict";
import initialForm from "./welcome.js";
import { smoothFadeOut } from "./helper.js";

const initialFormInputs = document.querySelectorAll(".options input");
const startGameBtn = document.querySelector("#start-game");
const nicknamesForm = document.querySelector(".nicknames");
const assignNamesBtn = document.querySelector("#assign-names");
const nicknames = document.querySelectorAll(".nicknames input");
const warningMsg = document.querySelector(".warning");

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  initialFormInputs.forEach((input) => {
    if (input.value == "") return;
    else smoothFadeOut(initialForm, nicknamesForm, 500);
  });
});

assignNamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // nicknames.forEach((name) => {
  //   if (name.validity.valueMissing) {
  //     console.log("bad");
  //     warningMsg.style.display = "block";
  //     setTimeout(function () {
  //       warningMsg.style.display = "none";
  //     }, 2000);
  //   }
  // smoothFadeOut(nicknamesForm, null, 500);
  // });
});
