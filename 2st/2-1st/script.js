function 배달팁계산하기() {
  document.querySelector("button").addEventListener("click", function () {
    if (document.querySelector("input").value < 10000) {
      return 3000;
    } else if (document.querySelector("input").value < 30000) {
      return 2000;
    } else if (document.querySelector("input").value < 50000) {
      return 1000;
    } else {
      return 0;
    }
  });
}

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("span").innerHTML = 배달팁계산하기();
});
