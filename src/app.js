function formatDate(date) {
  let hours = date.getHours();
  if (hours < 12) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes - `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = day[dayIndex];

  return `${day}`;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let dayElement = document.querySelector ("#c-day");
  let maxtempElement = document.querySelector ("#max-temp");
  let mintempElement = document.querySelector ("#min-temp");
  let iconElement = document.querySelector ("#img");



  let forecastHTML = `<div id=forecast-group>`;

  let days = ["Mon","Tues","Wed","Fri","Sat","Sun",];
  forecast.forEach (function (forecast, index))
    if (index < 6) {   
  
    forecastElement.innerHTML =
    forecastHTML +
    `
          <div id="forecast-group">
              <div class="weather-daily text-center">
              <h5 class="c-day">${day}</h5>
                <img src="img\5729378_sunny_sun_weather_climate_forecast.png" class="weather-img" alt="..." width="80" height="80">
                <div class="forecast-temp">
                  <span class="max-temp">29°</span>
                  <span class="min-temp">22°</span>
                </div>                          
              </div>

  `; }
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
};

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchCity(cityInputElement.value);
}

function searchCity(city) {
  let apiKey = "cd32822f9e64e59f7e2528e37e7549fa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat, lon);
}

let dateElement = document.querySelector("#date");
let currentDate = new Date();
dateElement.innerHTML = formatDate(currentDate);

let city = document.querySelector("#search-form");
city.addEventListener("submit", handleSubmit);

searchCity("Paris");
displayForecast();
