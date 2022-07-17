function showCity(response) {
  let cityInputElement = document.querySelector("#city-input");
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement.innerHTML = Math.round("#temperature");
}

let apiKey = "cd32822f9e64e59f7e2528e37e7549fa";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=cd32822f9e64e59f7e2528e37e7549fa`;
let units = "metrics";
let temperature = "#temperature";
let lat = position.coords.latitude;
let lon = position.coords.longitude;

axios.get(apiUrl).then(ShowTemperature);
navigator.geolocation.getCurrentPosition(retrievePosition);

let city = document.querySelector("form-control");
city.addEventListener("submit", handleSubmit);

search("city");
