import React from 'react';
import Country from './Country';

const Countries = ({ countries, filter }) => {
  //   console.log('props from Countries:', countries);

  const contentToShow =
    filter === ''
      ? countries
      : countries.filter((country) =>
          country.name
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase()),
        );

  //   console.log(contentToShow);

  return (
    /*     <ul>
      {contentToShow === ''
        ? ''
        : contentToShow.map((country) => (
            <Country key={country.name} name={country.name} />
          ))}
    </ul> */
    <div>
      {contentToShow === ''
        ? ''
        : contentToShow.length > 10
        ? 'Too many matches, specify another filter'
        : contentToShow.length > 1
        ? contentToShow.map((country) => (
            <p key={country.name}>{country.name}</p>
          ))
        : contentToShow.map((country) => (
            <Country key={country.name} country={country} />
          ))}
    </div>
  );
};

export default Countries;
