// "use strict";
import form from "./welcome.js";

const startGameBtn = document.querySelector("#start-game");
const numberOfPlayers = document.querySelector("#players");
const pointsToWin = document.querySelector("#points");

class Game {
  constructor(numPlayers, ptsWin) {
    this.numOfPlayers = numOfPlayers;
    this.pointsToWin = pointsToWin;
  }

  rollInitiative() {}
}

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.opacity = "0";
  setTimeout(function () {
    form.style.display = "none";
  }, 500);
});
