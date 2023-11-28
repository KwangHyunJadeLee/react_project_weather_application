import React from "react";
import Card from "./UI/Card";
import ChartBar from "./ChartBar";

// Functional component representing the humidity information box.
const HumidityBox = ({ weather }) => {
  return (
    <Card>
      {/* ChartBar component displaying humidity value */}
      <ChartBar value={weather.main.humidity}></ChartBar>
      {/* Displaying humidity percentage */}
      <h3>humidity: {weather.main.humidity}%</h3>
    </Card>
  );
};

export default HumidityBox;
