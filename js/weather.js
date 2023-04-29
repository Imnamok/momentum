const API_KEY = "0e846ca355008a131eba1b331e1a2f63";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const city = document.querySelector(".city");
      const weather = document.querySelector(".temp");
      const weatherImg = document.querySelector(".weatherIcon");
      const Icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      city.innerText = data.name;
      weather.innerText = `${Math.floor(data.main.temp)}℃ / ${data.weather[0].main}`;
      weatherImg.src = Icon;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
