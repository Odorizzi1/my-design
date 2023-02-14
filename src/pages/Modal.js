import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

function Modal({ show, closeModal }) {
  // const [show, setShow] = useState(false);
  const [modalClass, setModalClass] = useState('');

  useEffect(() => {
    if (show) {
      setModalClass('modal-overlay open');
    } else {
      setModalClass('modal-overlay');
    }
  }, [show]);

  return (
    <>
      <div className={modalClass}>
        <div className="modal">
          <p>Modal Content</p>
          <Button
            onClick={() => closeModal()}
            label="Fechar"
          />
        </div>
      </div>
    </>
  );
}

export default Modal;
