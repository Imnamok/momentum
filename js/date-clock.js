let today = document.querySelector("span#maindate");
let clock = document.querySelector("span#mainclock");

function getDate() {
  const calendar = new Date();
  const year = calendar.getFullYear();
  const month = calendar.getMonth() + 1;
  const date = calendar.getDate();
  const weekday = new Array(7);

  weekday[0] = "일";
  weekday[1] = "월";
  weekday[2] = "화";
  weekday[3] = "수";
  weekday[4] = "목";
  weekday[5] = "금";
  weekday[6] = "토";

  today.innerText = `${year}.${month}.${date}.(${weekday[calendar.getDay()]})`;
}

function getClock() {
  const clocks = new Date();
  const hours = String(clocks.getHours());
  const minutes = String(clocks.getMinutes()).padStart(2, "0");
  const seconds = String(clocks.getSeconds()).padStart(2, "0");

  if (hours > 12) {
    const pmHours = hours - 12;

    clock.innerText = `오후 ${pmHours}:${minutes}:${seconds}`;
  } else {
    clock.innerText = `오전 ${hours}:${minutes}:${seconds}`;
  }
}

getDate();
getClock();
setInterval(getClock, 1000);

// const visibleCal = document.querySelector(".date-clock");
// visibleCal.addEventListener("click", toggleBtn);

// function toggleBtn() {
//   const hiddenCal = document.querySelector(".calendar");

//   if (hiddenCal.style.visibility !== "hidden") {
//     hiddenCal.style.visibility = "hidden";
//   } else {
//     hiddenCal.style.visibility = "visible";
//   }
// }

const visibleCal = document.querySelector(".date-clock");
visibleCal.addEventListener("click", toggleCal);

function toggleCal() {
  const hiddenCal = document.querySelector(".calendar");

  if (hiddenCal.style.opacity !== "0") {
    hiddenCal.style.opacity = "0";
  } else {
    hiddenCal.style.opacity = "1";
  }
}
