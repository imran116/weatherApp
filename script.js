var count = 1;
function getWeather() {
  const apiKey = "c645a85c6565613bd594228d78c093b8";
  const cityInput = document.getElementById("city-input");
  const weatherInfo = document.getElementById("weather-info");

  const city = cityInput.value;

  if (city === "") {
    alert("Please enter a city.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const temperature_min = data.main.temp_min;
      const temperature_max = data.main.temp_max;
      const country = data.sys.country;

      weatherInfo.innerHTML = `
              <p>Temperature: ${temperature} &#8451;</p>
              <p>Description: ${description}</p>
              <p>Temperature Minimum: ${temperature_min}</p>
              <p>Temperature Maximum: ${temperature_max}</p>
              <p>Country: ${country}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML = "Error fetching weather data. Please try again.";
    });
}
