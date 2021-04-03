import React from 'react';
import Person from './Person';

const Persons = ({ persons, newFilter, deleteNumber }) => {
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
          id={person.id}
          name={person.name}
          number={person.number}
          deleteNumber={deleteNumber}
        />
      ))}
    </ul>
  );
};

export default Persons;
