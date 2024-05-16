const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const slidesLength = document.querySelector("");
let 현재슬라이드의인덱스 = 0;

nextBtn.addEventListener("click", function () {
  if (현재슬라이드의인덱스 <= 1) {
    현재슬라이드의인덱스++;
    slideContainer.computedStyleMap.transform = `transform: translate(-${현재슬라이드의인덱스}00vw);`;
  }
});

prevBtn.addEventListener("click", function () {
  if (현재슬라이드의인덱스 > 0) {
    현재슬라이드의인덱스--;
    slideContainer.computedStyleMap.transform = `transform: translate(-${현재슬라이드의인덱스}00vw);`;
  }
});
