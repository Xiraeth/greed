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

export { smoothFadeOut, smoothFadeIn, warningMsgFlash };
