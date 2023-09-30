"use strict";

import { FADEOUT_TIME } from "./config.js";

const playBtn = document.querySelector(".welcome .start");
const welcomeContainer = document.querySelector(".welcome");
const welcomeMsg = document.querySelector(".welcome h1");
const subMsg = document.querySelector(".welcome h3");
const audioToggle = document.querySelector(".fa-volume-high");
const initialForm = document.querySelector(".options");
let bgMusic;

playBtn.addEventListener("click", (e) => {
  const markup = `
  <audio id="background_music" autoplay loop >
   <source src="audio/Tavern_Ambient_Music.mp3" type="audio/mpeg" />
  </audio>
  `;
  welcomeMsg.style.opacity = 0;
  subMsg.style.opacity = 0;
  playBtn.style.opacity = 0;
  audioToggle.style.opacity = 1;
  setTimeout(function () {
    welcomeMsg.classList.add("hidden");
    subMsg.classList.add("hidden");
    playBtn.classList.add("hidden");
    welcomeContainer.style.display = "none";
    document.body.insertAdjacentHTML("afterbegin", markup);
    bgMusic = document.querySelector("#background_music");
    bgMusic.volume = 0.3;
    initialForm.style.display = "flex";
  }, FADEOUT_TIME);
});

audioToggle.addEventListener("click", (e) => {
  if (bgMusic.volume > 0) bgMusic.volume = 0;
  else bgMusic.volume = 0.3;
  audioToggle.classList.toggle("fa-volume-high");
  audioToggle.classList.toggle("fa-volume-xmark");
});

export default initialForm;
