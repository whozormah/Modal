"use strict";

var openCard = document.querySelectorAll(".open");
var closeCard = document.querySelector(".uil");
var card = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < openCard.length; i++) {
  openCard[i].addEventListener("click", function () {
    console.log("Buttons Clicked");
    card.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
} // closeCard.addEventListener("click", function () {
//   card.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// overlay.addEventListener("click", function () {
//   card.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// DRY for the close card
// Hence


var closeModal = function closeModal() {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeCard.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal); // Listen for a Key Pressed

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape") {
    if (!card.classList.contains("hidden")) {
      closeModal();
    }
  }
});
//# sourceMappingURL=app.dev.js.map
