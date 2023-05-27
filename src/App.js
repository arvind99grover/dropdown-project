import React from 'react';
import Dropdown from './Dropdown';

const App = () => {
  const dropdownItems = ['Yes', 'Probably not'];

  return (
    <div className="app">
      <h2>Should you use a dropdown?</h2>
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
