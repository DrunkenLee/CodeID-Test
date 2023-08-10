async function getWeatherTemperature() {
  const apiKey = "API_KEY";
  const locationKey = "LOCATION_KEY";

  try {
    const response = await fetch(
      `https://dataservice.accuweather.com/current-conditions/v1/${locationKey}?apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const temperatureCelsius = data[0].Temperature.Metric.Value;
      console.log(`Current temperature: ${temperatureCelsius} °C`);
    } else {
      console.log("No weather data available.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeatherTemperature();
