"use strict";

const numberOfPlayers = document.querySelector("#players");
const pointsToWin = document.querySelector("#points");

class Game {
  players = [];

  constructor(numPlayers, ptsWin) {
    this.numOfPlayers = numOfPlayers;
    this.pointsToWin = pointsToWin;
  }

  rollInitiative() {}
}
