const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

function onLoginBtnClick() {
  console.dir(loginInput);
  console.log("click!!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);
