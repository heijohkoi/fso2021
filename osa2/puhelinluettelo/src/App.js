import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import numberService from './services/numbers';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [attentionMessage, setAttentionMessage] = useState(null);

  useEffect(() => {
    numberService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

  const handleDeleteClick = (id, name) => {
    // console.log('clicked delete ' + id);
    numberService.deleteId(id).then((returnValue) => {
      if (returnValue === true) {
        setPersons(persons.filter((p) => p.id !== id));
        setAlertMessage(`Deleted ${name}`);
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      }
    });
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.every((person) => person.name !== newName)) {
      numberService
        .create({
          name: newName,
          number: newNumber,
        })
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setAttentionMessage(`Added ${newName}`);
          setTimeout(() => {
            setAttentionMessage(null);
          }, 5000);
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          setAlertMessage(error.response.data['error']);
        });
      setTimeout(() => {
        setAlertMessage(null);
      }, 5000);
    } else {
      const id = persons.find((person) => person.name === newName).id;
      numberService
        .update(id, {
          name: newName,
          number: newNumber,
        })
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson,
            ),
          );
          setAttentionMessage(`Updated ${newName}`);
          setTimeout(() => {
            setAttentionMessage(null);
          }, 5000);
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          setAlertMessage(
            `Information of ${newName} has already been removed from server`,
          );
          setTimeout(() => {
            setAlertMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.name !== newName));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        alert={alertMessage}
        attention={attentionMessage}
      />

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

      <Persons
        persons={persons}
        newFilter={newFilter}
        deleteNumber={handleDeleteClick}
      />
    </div>
  );
};

export default App;
