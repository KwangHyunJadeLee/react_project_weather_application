import React from "react";
import Button from "./UI/Button";

// Functional component representing the weather buttons.
const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="menu-container">
      {/* Button for current location, with conditional styling */}
      <Button
        variant={`${setCity === "" ? "outline-primary" : "primary"}`}
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {/* Map through cities to generate buttons with conditional styling */}
      {cities.map((city, index) => (
        <Button
          variant={`${setCity === city ? "outline-primary" : "primary"}`}
          key={index}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
