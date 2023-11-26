import React from 'react';
import './style.css';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
export default function App() {
  return (
    <div>
      <ParentComponent/>
      <ChildComponent/>
    </div>
  );
}
