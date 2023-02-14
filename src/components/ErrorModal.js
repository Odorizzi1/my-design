import React from 'react';

const ErrorModal = ({ message }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;