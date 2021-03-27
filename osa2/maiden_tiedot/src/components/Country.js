import React from 'react';

const Country = ({ country }) => {
  //   console.log(country);
  //   console.log(country.capital);

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
          <li>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt="The flag of the country"
        width="100"
      />
    </>
  );
};

export default Country;
