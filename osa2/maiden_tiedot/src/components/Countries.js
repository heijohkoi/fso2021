import React from 'react';
import Country from './Country';

const Countries = ({ countries, filter, setFilter, api_key }) => {
  //   console.log('props from Countries:', countries);

  //   setTimeout(() => setFilter('Finland'), 5000);

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
            <p key={country.name}>
              {country.name}{' '}
              <button onClick={() => setFilter(country.name)}>
                show
              </button>
            </p>
          ))
        : contentToShow.map((country) => (
            <Country
              key={country.name}
              country={country}
              api_key={api_key}
            />
          ))}
    </div>
  );
};

export default Countries;
