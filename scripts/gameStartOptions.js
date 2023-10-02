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
  if (+winCon.value < 1000) {
    const msg = `Win condition points have to be greater than or equal to 1000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  if (+winCon.value > 10000) {
    const msg = `Win condition points have to be less than or equal to 10000`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  if (+numPlayers.value < 2) {
    const msg = `Players must be at least 2 wtf`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  if (+numPlayers.value > 6) {
    const msg = `Players can't be more than 6 chill`;
    warningMsgFlash(startWarningMsg, msg, FADEOUT_TIME);
    return;
  }
  smoothFadeOut(initialForm, nicknamesForm, FADEOUT_TIME);
  console.log(+numPlayers.value);

  for (let i = 1; i <= +numPlayers.value; i++) {
    document
      .querySelector(`#player--${i}-name`)
      .closest("label")
      .classList.remove("hidden");
  }
});

assignNamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

// for (let i = 1; i <= +numPlayers; i++) {
//   if (i == 1) {
//     const markup = `
//       <form class="nicknames">
//         <label for="player--${i}-name"
//           ><i class="fa-solid fa-user"></i>
//           Enter player ${i} name:
//           <input
//             type="text"
//             id="player--${i}-name"
//             name="player_${i}_name"
//             required
//             autocomplete="off"
//             minlength="1"
//             maxlength="16"
//         /></label>

//     `;
//     document.body.insertAdjacentHTML("beforeend", markup);
//   } else if (i == +numPlayers) {
//     const markup = `
//         <label for="player--${i}-name" id="player-${i}-label"
//           ><i class="fa-solid fa-user"></i>
//           Enter player ${i} name:
//           <input
//             type="text"
//             id="player--${i}-name"
//             name="player_${i}_name"
//             required
//             autocomplete="off"
//             minlength="1"
//             maxlength="16"
//         /></label>

//         <button type="submit" id="assign-names">Assign names</button>
//         <span class="assign-warning"
//           >You can't leave an input field empty...</span
//         >
//       </form>
//     `;
//     document.body.insertAdjacentHTML("beforeend", markup);
//   } else {
//     const markup = `
//         <label for="player--${i}-name" id="player-${i}-label"
//           ><i class="fa-solid fa-user"></i>
//           Enter player ${i} name:
//           <input
//             type="text"
//             id="player--${i}-name"
//             name="player_${i}_name"
//             required
//             autocomplete="off"
//             minlength="1"
//             maxlength="16"
//         /></label>
//     `;
//     document
//       .querySelector(`#player-${i}-label`)
//       .insertAdjacentHTML("afterend", markup);
//   }
// }
