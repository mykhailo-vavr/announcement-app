import React from 'react';
import cls from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <>
      <button className={cls.button} onClick={onClick || (() => {})}>
        {children}
      </button>
    </>
  );
};

export default Button;
