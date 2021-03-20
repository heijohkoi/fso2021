import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.every((person) => person.name !== newName)) {
      setPersons(
        persons.concat({ name: newName, number: newNumber }),
      );
      setNewName('');
      setNewNumber('');
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={newFilter} filterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addName={addName}
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
