const loginPage = document.querySelector("#login-page");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const mainPage = document.querySelector("#main-page");
const logoutBtn = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginPage.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  loginPage.classList.remove(HIDDEN_CLASSNAME);
  mainPage.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요. ${username}님! \n 오늘도 좋은 하루 보내시길.. :)`;
  loginPage.classList.add(HIDDEN_CLASSNAME);
  mainPage.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginPage.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", onLogoutSubmit);
