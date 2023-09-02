import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
        {selectedNumber !== null ? selectedNumber : 'Select a number'}
        <span className={`arrow-icon ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleNumberSelect(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
