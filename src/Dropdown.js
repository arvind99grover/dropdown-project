import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleButtonHover = () => {
    setIsOpen(true);
  };

  const handleDropdownBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onBlur={handleDropdownBlur}>
      <button
        className={`dropdown-button ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleButtonHover}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem : 'Select'}
        <span className="dropdown-icon">&#9662;</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className={`dropdown-item ${item === 'Yes' || item === 'Probably not' ? 'no-icon' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
