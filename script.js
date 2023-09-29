"use strict";

const startBtn = document.querySelector(".start");
const welcomeMsg = document.querySelector(".welcome h1");
const subMsg = document.querySelector(".welcome h3");
const audioToggle = document.querySelector(".fa-volume-high");
let bgMusic;

startBtn.addEventListener("click", (e) => {
  const markup = `
  <audio id="background_music" autoplay loop controls class="hidden">
   <source src="/audio/Tavern_Ambient_Music.mp3" type="audio/mpeg" />
  </audio>
  `;
  welcomeMsg.style.opacity = 0;
  subMsg.style.opacity = 0;
  startBtn.style.opacity = 0;
  audioToggle.style.opacity = 1;
  setTimeout(function () {
    welcomeMsg.classList.add("hidden");
    subMsg.classList.add("hidden");
    startBtn.classList.add("hidden");
    document.body.insertAdjacentHTML("afterbegin", markup);
    bgMusic = document.querySelector("#background_music");
    bgMusic.volume = 0.3;
  }, 500);
});

audioToggle.addEventListener("click", (e) => {
  if (bgMusic.volume > 0) bgMusic.volume = 0;
  else bgMusic.volume = 0.3;
  audioToggle.classList.toggle("fa-volume-high");
  audioToggle.classList.toggle("fa-volume-xmark");
});
