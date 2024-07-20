import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="component-container">
      <h1>Counter: {count}</h1>
      
      <button onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faPlus} /> Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        <FontAwesomeIcon icon={faMinus} /> Decrement
      </button>
    </div>
  );
};

export default Counter;
