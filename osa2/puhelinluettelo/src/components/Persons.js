import React from 'react';
import Person from './Person';

const Persons = ({ persons, newFilter }) => {
  const contentToShow =
    newFilter === ''
      ? persons
      : persons.filter(
          (person) =>
            person.name
              .toLocaleLowerCase()
              .includes(newFilter.toLocaleLowerCase()) ||
            person.number.includes(newFilter),
        );

  return (
    <ul>
      {contentToShow.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
};

export default Persons;
