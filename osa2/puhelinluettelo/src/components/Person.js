import React from 'react';

const Person = ({ name }) => {
  console.log('Hello from Person, props is:', name);

  return <li>{name}</li>;
};

export default Person;
