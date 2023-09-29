const smoothFadeOut = function (elDis, elAp = undefined, ms) {
  elDis.style.opacity = "0";
  setTimeout(function () {
    elDis.style.display = "none";
    if (elAp) elAp.style.display = "flex";
  }, ms);
};

export { smoothFadeOut };
