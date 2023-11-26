import React, { useState } from 'react';
import HighOrderComponent from './MyContext';
const ChildComponent = (props) => {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      <b>Count Value:= {count}</b>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default HighOrderComponent(ChildComponent);
