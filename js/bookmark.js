const visibleBookMark = document.querySelector(".bookmark-btn");
visibleBookMark.addEventListener("click", toggleBookMark);

function toggleBookMark() {
  const hiddenBookMark = document.querySelector(".bookmark-box");

  if (hiddenBookMark.style.opacity !== "0") {
    hiddenBookMark.style.opacity = "0";
  } else {
    hiddenBookMark.style.opacity = "1";
  }
}
