import React from 'react';
import cls from './Textarea.module.scss';

const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <>
      <textarea
        value={value || ''}
        type="text"
        placeholder={placeholder}
        className={cls.textarea}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default Textarea;
