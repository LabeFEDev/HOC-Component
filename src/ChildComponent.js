import React, { useState } from 'react';
const ChildComponent = ({ onChangeEvent }) => {
  const [getVal, setVal] = useState('');
  const changeValueHandler = (e) => {
    onChangeEvent(e.target.value);
  };
  return (
    <div>
      <h6>Child Component</h6>
      <input type="text" onChange={changeValueHandler} />
    </div>
  );
};
export default ChildComponent;
