import React, { useEffect, useState, useCallback } from "react";
import WeatherBox from "./component/WeatherBox";
import HumidityBox from "./component/HumidityBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import BasicInfoBox from "./component/BasicInfoBox";
import Search from "./component/Search";

function App() {
  // State variables for weather data, city, searched city, loading state, and error
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State variable for favorite cities
  const [cities, setCities] = useState([]);

  // API key for OpenWeatherMap API
  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  // Function to fetch weather data based on city or current location
  const fetchWeatherHandler = useCallback(async () => {
    let url = "";

    if (city === "") {
      try {
        // Get current location coordinates using Geolocation API
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude: lat, longitude: lon } = position.coords;

        // Form the URL for fetching weather data using current location
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      } catch (error) {
        setError("Failed to retrieve current location. Please try again.");
        setLoading(false);
        return;
      }
    } else {
      // Form the URL for fetching weather data based on the provided city
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }

    try {
      // Set loading state and clear any previous errors
      setLoading(true);
      setError(null);

      // Fetch weather data from the API
      const response = await fetch(url);

      if (!response.ok) {
        // If the response is not OK, throw an error
        throw new Error("Weather data not available for the selected city.");
      }

      // Parse the response as JSON and set the weather state
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      // If an error occurs during fetching, set the error state
      setError(error.message);
    } finally {
      // Set loading state to false after fetching is complete
      setLoading(false);
    }
  }, [city]);

  // useEffect hook to trigger the fetchWeatherHandler when the city state changes
  useEffect(() => {
    fetchWeatherHandler();
  }, [fetchWeatherHandler]);

  // Render the main application
  return (
    <div>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <div className="container">
          {/* Display loading spinner if data is still loading */}
          <ClipLoader
            color="#2962ff"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <div>
          {/* Display weather information, buttons, and search component when data is loaded */}
          <div className="container">
            <BasicInfoBox weather={weather} error={error}></BasicInfoBox>
            <WeatherBox weather={weather} error={error}></WeatherBox>
            <HumidityBox weather={weather} error={error}></HumidityBox>
          </div>
          <div className="menu-container">
            {/* Display WeatherButton component with favorite cities and setCity function */}
            <WeatherButton cities={cities} setCity={setCity}></WeatherButton>
          </div>
          <div>
            {/* Display Search component with cities, setCity, setCities, searched, and setSearched functions */}
            <Search
              cities={cities}
              setCity={setCity}
              setCities={setCities}
              searched={searched}
              setSearched={setSearched}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Export the App component as the default export
export default App;
