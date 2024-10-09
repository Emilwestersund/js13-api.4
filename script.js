const apikey = "9586dd9cef9c9fb2f21c9705d808ff68";

function getWeather() {
    const city = document.getElementById("city-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ugyldig bynavn. Vennligst prøv igjen.');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("weather-info").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temp: ${data.main.temp}°C</p>
                <p>Min: ${data.main.temp_min}°C, Max: ${data.main.temp_max}°C</p>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Feil ved henting av data:', error);
            document.getElementById("weather-info").innerHTML = `
                <p style="color: orange; font-weight: bold;">${error.message}</p>
            `;
        });
        
}
