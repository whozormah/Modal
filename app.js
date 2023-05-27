"use strict";
const openCard = document.querySelectorAll(".open");
const closeCard = document.querySelector(".uil");
const card = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
console.log(overlay);

for (let i = 0; i < openCard.length; i++) {
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
