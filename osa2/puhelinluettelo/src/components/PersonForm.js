import React from 'react';

const PersonForm = ({
  addName,
  newName,
  nameHandler,
  newNumber,
  numberHandler,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={nameHandler} />
      </div>
      <div>
        number: <input value={newNumber} onChange={numberHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
