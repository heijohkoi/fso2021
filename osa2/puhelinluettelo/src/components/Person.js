import React from 'react';

const Person = ({ id, name, number, deleteNumber }) => {
  //   console.log('Hello from Person, props is:', name);

  return (
    <li>
      {name} {number}{' '}
      <button onClick={() => deleteNumber(id, name)}>delete</button>
    </li>
  );
};

export default Person;
