import React from "react";
import Card from "./UI/Card";

// Functional component representing the weather information box.
const WeatherBox = ({ weather }) => {
  return (
    <Card>
      {/* Display temperature in Celsius, rounded down if positive */}
      <h2>
        {weather &&
          `${
            weather.main.temp > 0
              ? Math.floor(weather.main.temp)
              : weather.main.temp
          }`}
        °C
      </h2>
      {/* Display weather description */}
      <h3>{weather && weather.weather[0].description}</h3>
    </Card>
  );
};

export default WeatherBox;
