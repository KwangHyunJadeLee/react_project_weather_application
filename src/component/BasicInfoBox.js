import React from 'react';
import Card from './UI/Card';


// Component to display basic information about the weather.

const BasicInfoBox = ({ weather }) => {
  return (
    <Card>
      <h2>{weather && weather.name}</h2>
    </Card>
  );
}

export default BasicInfoBox;
