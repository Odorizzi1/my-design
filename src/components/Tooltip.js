import React from 'react';

const Tooltip = ({ message, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip">{message}</span>
    </div>
  );
};

export default Tooltip;