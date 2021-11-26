import React from 'react';
import cls from './Modal.module.scss';

const Modal = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? cls.modal_overlay : cls.modal_overlay_hide}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? cls.modal_body : cls.modal_body_hide}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
