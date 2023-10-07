const smoothFadeOut = function (el, ms) {
  el.style.opacity = "0";
  setTimeout(function () {
    el.style.display = "none";
  }, ms);
};

const smoothFadeIn = function (el, ms, displayMethod = undefined) {
  el.style.opacity = "1";
  setTimeout(function () {
    el.style.display = displayMethod;
  }, ms);
};

const warningMsgFlash = function (msgElement, msg, duration) {
  msgElement.textContent = msg;
  msgElement.style.opacity = "1";
  setTimeout(function () {
    msgElement.style.opacity = "0";
  }, duration * 4);
};

const createAudioElement = function (el = null, url) {
  if (el) {
    el.remove();
  }

  let newEl = `
    <audio id="background_music" autoplay loop>
      <source src="${url}" type="audio/mpeg" />
    </audio>
  `;
  document.body.insertAdjacentHTML("afterbegin", newEl);
  document.querySelector("#background_music").volume = 0.3;

  // Function returns the audio element so we can assign it to a variable
  return document.querySelector("#background_music");
};

const toggleMusic = function (audioEl, btn) {
  if (audioEl.volume > 0) audioEl.volume = 0;
  else audioEl.volume = 0.5;
  btn.classList.toggle("fa-volume-high");
  btn.classList.toggle("fa-volume-xmark");
};

const createDiceRoll = () => {
  return Math.round(Math.random() * 100) + 1;
};

const changeColour = (value) => {
  if (value < 20) return "red";
  else if (value >= 20 && value < 40) return "rgb(255, 123, 0)";
  else if (value >= 40 && value < 60) return "rgb(255, 251, 0)";
  else if (value >= 60 && value < 80) return "rgb(60, 255, 0)";
  else if (value >= 80 && value < 100) "rgb(0, 247, 255)";
  else return "rgb(255, 0, 255)";
};

export {
  smoothFadeOut,
  smoothFadeIn,
  warningMsgFlash,
  createAudioElement,
  toggleMusic,
  createDiceRoll,
  changeColour,
};
