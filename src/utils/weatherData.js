export async function fetchCurrentWeather(location) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );
  
    if (!response.ok) {
      throw new Error("Monsters prevented us from fetching the weather data!");
    }
  
    const data = await response.json();
    return data;
  }

  export async function fetchForecast(location) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
    );
  
    if (!response.ok) {
      throw new Error("Monsters prevented us from fetching the weather data!");
    }
  
    const data = await response.json();
    return data;
  }
  
