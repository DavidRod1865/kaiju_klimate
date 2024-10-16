import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { fetchCurrentWeather, fetchForecast } from "../../utils/weatherData";
import {
  generateKaijuDescriptions,
  generateKaijuForecast,
} from "../../utils/kaijuDescriptions";
import LocationLoading from "./LocationLoading";
import WeeklyForecast from "./WeeklyForecast";
import Header from "./Header";
import CurrentForecast from "./CurrentForecast";
import WarningAlert from "./WarningAlert";
import ChillAlert from "./ChillAlert";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [kaijuDescription, setKaijuDescription] = useState("");
  const saveWeatherData = useMutation(api.weather.saveWeatherData);

  useEffect(() => {
    if (!location) {
      return;
    }

    async function getWeather() {
      try {
        const { latitude, longitude } = location;
        const locationString = `${latitude},${longitude}`;
        const weatherData = await fetchCurrentWeather(locationString);
        setCurrentWeather(weatherData);

        const descriptionData = generateKaijuDescriptions(
          weatherData.current.condition.text
        );
        setKaijuDescription(descriptionData);

        const forecastData = await fetchForecast(locationString);
        const forecastDescription = generateKaijuForecast(
          forecastData.forecast.forecastday
        );
        setForecast(forecastDescription);

        await saveWeatherData({
          location: locationString,
          currentCondition: weatherData.current.condition.text,
          temperature: weatherData.current.temp_f,
          feelsLike: weatherData.current.feelslike_f,
          kaijuDescription: descriptionData.description,
          forecast: forecastDescription,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    getWeather();
  }, [location, saveWeatherData]);

  const handleLocationSearch = async (searchQuery) => {
    try {
      const weatherData = await fetchCurrentWeather(searchQuery);
      setCurrentWeather(weatherData);

      const descriptionData = generateKaijuDescriptions(
        weatherData.current.condition.text
      );
      setKaijuDescription(descriptionData);

      const forecastData = await fetchForecast(searchQuery);
      const forecastDescription = generateKaijuForecast(
        forecastData.forecast.forecastday
      );
      setForecast(forecastDescription);

      await saveWeatherData({
        location: searchQuery,
        currentCondition: weatherData.current.condition.text,
        temperature: weatherData.current.temp_f,
        kaijuDescription: descriptionData.description,
        forecast: forecastDescription,
      });
    } catch (error) {
      console.error(
        "Error fetching weather data for the searched location:",
        error
      );
    }
  };

  if (!currentWeather) {
    return (
      <div>
        <LocationLoading onLocationFound={setLocation} />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full md:bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${kaijuDescription.icon})` }}
    >
      <Header onSearch={handleLocationSearch} />
      <CurrentForecast weather={currentWeather} />

      {kaijuDescription.name === "Chill Day" ? (
        <ChillAlert kaijuDescription={kaijuDescription} />
      ) : (
        <WarningAlert kaijuDescription={kaijuDescription} />
      )}

      <div className="flex flex-col bg-black border-yellow-300 border-4 bg-opacity-90 mb-3 p-4 md:w-fit">
        <h2 className="text-3xl md:text-5xl text-yellow-300 text-center font-creepster">
          3-Day Forecast for {currentWeather.location.name}!
        </h2>
        <WeeklyForecast forecast={forecast} />
      </div>
    </div>
  );
};

export default Home;
