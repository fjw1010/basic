// setTimeout(function () {
//   document.querySelector(".ad-box").style.display = "none";
// }, 5000);
const timer = document.querySelector(".timer");
let conut = timer.textContent;

const intervalId = setInterval(function () {
  if (conut > 0) {
    count = conut - 1;
    timer.textContent = conut;
  } else {
    document.querySelector(".ad-box").style.display = "none";
    clearInterval(intervalId);
  }
});
