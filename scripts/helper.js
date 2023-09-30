const smoothFadeOut = function (elDis, elAp = undefined, ms) {
  elDis.style.opacity = "0";
  setTimeout(function () {
    elDis.style.display = "none";
    if (elAp) elAp.style.display = "flex";
  }, ms);
};

const warningMsgFlash = function (msgElement, msg, duration) {
  msgElement.textContent = msg;
  msgElement.style.opacity = "1";
  setTimeout(function () {
    msgElement.style.opacity = "0";
  }, duration * 4);
};

export { smoothFadeOut, warningMsgFlash };
