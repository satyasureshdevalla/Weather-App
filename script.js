document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '89c2ee9dd6e019731363298d212c8712'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${apiKey}&units=metric`;

    //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=89c2ee9dd6e019731363298d212c8712

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherDisplay = document.getElementById('weather-display');
            weatherDisplay.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
});


document.getElementById("info-button").addEventListener("click", function() {
    const infoDisplay = document.getElementById("info-display");
    if (infoDisplay.style.display === "none") {
        infoDisplay.style.display = "block";
    } else {
        infoDisplay.style.display = "none";
    }
});

