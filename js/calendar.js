const todayDate = new Date(); // 오늘 날짜
let thisMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());

let currentYear = thisMonth.getFullYear();
let currentMonth = thisMonth.getMonth();
let currentDate = thisMonth.getDate();

renderCal(thisMonth);
function renderCal(thisMonth) {
  // 렌더링을 위한 데이터 정리
  currentYear = thisMonth.getFullYear();
  currentMonth = thisMonth.getMonth();
  currentDate = thisMonth.getDate();

  // 지난달 마지막날의 요일, 날짜
  const lastDay = new Date(currentYear, currentMonth, 0);
  const prevDate = lastDay.getDate();
  const prevDay = lastDay.getDay();

  // 이번달 마지막날의 요일, 날짜
  const currentendday = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = currentendday.getDate();
  const nextDay = currentendday.getDay();
  // console.log(prevDate, prevDay, nextDate, nextDay);

  const navYM = document.querySelector(".nav-ym"); // 올해 현재 월 표시하기
  navYM.innerText = `${currentYear}년 ${currentMonth + 1}월`;

  const calendarDates = document.querySelector(".dates-box");
  calendarDates.innerHTML = "";

  if (prevDay !== 6) {
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      calendarDates.innerHTML = calendarDates.innerHTML + '<div class="dates disable">' + i + "</div>";
    }
  }

  for (let i = 1; i <= nextDate; i++) {
    calendarDates.innerHTML = calendarDates.innerHTML + '<div class="dates current">' + i + "</div>";
  }

  if (nextDay !== 6) {
    for (let i = 1; i <= 6 - nextDay; i++) {
      calendarDates.innerHTML = calendarDates.innerHTML + '<div class="dates  disable">' + i + "</div>";
    }
  }

  //오늘 날짜 표시하기
  const today = new Date();
  if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
    const todayDate = today.getDate();
    let currentMonthDate = document.querySelectorAll(".current");
    currentMonthDate[todayDate - 1].classList.add("today");
  }
}

// 달력 전 후 변경
const goPrev = document.querySelector(".prev");
const goNext = document.querySelector(".next");

goPrev.addEventListener("click", prevCal);
goNext.addEventListener("click", nextCal);

function prevCal() {
  thisMonth = new Date(currentYear, currentMonth - 1, 1);
  renderCal(thisMonth);
}

function nextCal() {
  thisMonth = new Date(currentYear, currentMonth + 1, 1);
  renderCal(thisMonth);
}
