import React from 'react';

const Person = ({ name, number }) => {
  //   console.log('Hello from Person, props is:', name);

  return (
    <li>
      {name} {number}
    </li>
  );
};

export default Person;
