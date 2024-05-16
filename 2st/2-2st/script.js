window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    document.querySelector(".up-button").style.display = "block";
  } else {
    document.querySelector(".up-button").style.display = "none";
  }
});

document.querySelector(".up-button").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
