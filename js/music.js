const visibleAudio = document.querySelector(".music-btn");
visibleAudio.addEventListener("click", toggleAudio);

function toggleAudio() {
  const hiddenAudio = document.querySelector(".music");

  if (hiddenAudio.style.opacity !== "0") {
    hiddenAudio.style.opacity = "0";
  } else {
    hiddenAudio.style.opacity = "1";
  }
}
