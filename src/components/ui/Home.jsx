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
    <>
      <img
        src={kaijuDescription.icon}
        alt="Kaiju Icon"
        className="absolute inset-0 w-screen h-full object-cover z-1"
      />
      <div className="flex flex-col items-center h-screen w-screen">
        <Header onSearch={handleLocationSearch} />
        <CurrentForecast weather={currentWeather} />
        <WarningAlert kaijuDescription={kaijuDescription} />
      </div>
      
      <div className="bg-black border-red-500 border-4 bg-opacity-90 relative z-10 mb-3">
        <h2 className="text-5xl text-yellow-300 text-center relative z-10 font-creepster">
          5-Day Forecast for {currentWeather.location.name}!
        </h2>
        <WeeklyForecast forecast={forecast} />
      </div>
    </>
  );
};

export default Home;
