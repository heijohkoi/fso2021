import React from 'react';

const Filter = ({ filter, filterChange }) => {
  return (
    <form>
      <div>
        find countries{' '}
        <input value={filter} onChange={filterChange} />
      </div>
    </form>
  );
};

export default Filter;
