"use strict";

import { FADE_TIME } from "./config.js";
import { toggleMusic, createAudioElement } from "./helper.js";

const playBtn = document.querySelector(".welcome .start");
const welcomeContainer = document.querySelector(".welcome");
const welcomeMsg = document.querySelector(".welcome h1");
const subMsg = document.querySelector(".welcome h3");
const audioToggleBtn = document.querySelector(".fa-volume-high");
const initialForm = document.querySelector(".options");
let audio;

playBtn.addEventListener("click", (e) => {
  // Change background image
  document.body.style.backgroundImage = "url('images/tavern_bg.webp')";

  audio = createAudioElement(audio, "audio/intro.mp3");

  // Make first section of game options appear
  welcomeMsg.style.opacity = 0;
  subMsg.style.opacity = 0;
  playBtn.style.opacity = 0;
  audioToggleBtn.style.opacity = 1;
  setTimeout(function () {
    welcomeMsg.classList.add("hidden");
    subMsg.classList.add("hidden");
    playBtn.classList.add("hidden");
    welcomeContainer.style.display = "none";
    initialForm.style.display = "flex";
  }, FADE_TIME);
});

audioToggleBtn.addEventListener("click", createToggleMusic);

function createToggleMusic() {
  toggleMusic(audio, audioToggleBtn);
}

export { initialForm, createToggleMusic, audioToggleBtn, audio };
