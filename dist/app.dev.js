"use strict";

var openCard = document.querySelectorAll(".open");
var closeCard = document.querySelector(".uil");
var card = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
console.log(overlay);

for (var i = 0; i < openCard.length; i++) {
  openCard[i].addEventListener("click", function () {
    console.log("Buttons Clicked");
    card.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeCard.addEventListener("click", function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
});
//# sourceMappingURL=app.dev.js.map
