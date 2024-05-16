const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("mouseover", function () {
    tabContents[i].classList.add("show");
  });

  tabBtns[i].addEventListener("mouseover", function () {
    tabContents[i].classList.remove("show");
  });
}
