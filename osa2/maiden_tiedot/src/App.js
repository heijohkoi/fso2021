import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [newFilter, setNewFilter] = useState('');
  const [coutryData, setCountryData] = useState('');

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountryData(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <Filter filter={newFilter} filterChange={handleFilterChange} />
      <Countries
        countries={coutryData}
        filter={newFilter}
        setFilter={setNewFilter}
        api_key={api_key}
      />
    </div>
  );
};

export default App;
