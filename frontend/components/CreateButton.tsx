import React, { useState } from 'react';
import './CreateButton.css';

const CreateButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`create-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="button-icon">{isOpen ? 'X' : '+'}</div>
      {isOpen && (
        <div className="floating-buttons">
          <button className="floating-button">Create Budget</button>
          <button className="floating-button">Create Expense</button>
        </div>
      )}
    </div>
  );
};

export default CreateButton;
