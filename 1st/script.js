let count = 0;
const btn = document.querySelector(".bts");
btn.addEventListener("click", function () {
  count = count + 1;
  btn.textContent = count;
});

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function () {
  count = 0;
  btn.textContent = count;
});
