import React from 'react';
import cls from './Input.module.scss';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <>
      <input
        value={value || ''}
        type="text"
        placeholder={placeholder}
        className={cls.input}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
