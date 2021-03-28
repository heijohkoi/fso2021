import React from 'react';

const Weather = ({ capital, weatherData }) => {
  return (
    <>
      <h2>Weather in {capital}</h2>
      <div>
        <strong>temperature:</strong>{' '}
        {weatherData.current.temperature} Celcius
        <br />
        <img
          src={weatherData.current.weather_icons}
          alt="Weather icon"
          width="100"
        />
        <br />
        <strong>wind:</strong> {weatherData.current.wind_speed} mph
        direction {weatherData.current.wind_dir}
      </div>
    </>
  );
};

export default Weather;
