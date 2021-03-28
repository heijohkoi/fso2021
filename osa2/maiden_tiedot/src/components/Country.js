import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = ({ country, api_key }) => {
  //   console.log(country);
  //   console.log(country.capital);
  const [weatherData, setWeatherData] = useState('');
  console.log('weather data: ', weatherData);

  const params = {
    access_key: api_key,
    query: country.capital,
  };
  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then((response) => {
        setWeatherData(response.data);
      });
  }, []);

  return (
    <>
      <h1>{country.name}</h1>
      <div>
        capital {country.capital}
        <br />
        population {country.population}
      </div>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt="The flag of the country"
        width="100"
      />
      {weatherData === '' ? (
        ''
      ) : (
        <Weather
          capital={country.capital}
          weatherData={weatherData}
        />
      )}
    </>
  );
};

export default Country;
