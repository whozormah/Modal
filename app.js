"use strict";
const openCard = document.querySelectorAll(".open");
const closeCard = document.querySelector(".uil");
const card = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < openCard.length; i++) {
  openCard[i].addEventListener("click", function () {
    console.log("Buttons Clicked");
    card.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
// closeCard.addEventListener("click", function () {
//   card.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   card.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// DRY for the close card
// Hence

const closeModal = function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeCard.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Listen for a Key Pressed

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (card.classList.contains("hidden")) {
      closeModal();
    }
  }
});
