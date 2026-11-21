import React from 'react';
import style from './Input.module.css';
export const Input = ({ label, type, name, onChange,onBlur, error }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={style.input}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
