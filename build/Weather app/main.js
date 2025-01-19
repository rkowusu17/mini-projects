const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "5675f82c3ea7f1498954a5975b78a283";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
async function checkWeather(city) {
  const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.temp + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
    } else if (data.weather[0].main == "SNow") {
      weatherIcon.src = "img/snow.png";
    } else {
      weatherIcon.src = "img/haze.png";
    }

    const displayEl = document.querySelectorAll(".weather , .details");
    displayEl.forEach((element) => {
      element.style.display = "block";
    });
    document.querySelector(".details").style.display = "flex";
    // document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
    console.log("works");
  }
});
