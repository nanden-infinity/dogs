import React from 'react';
import style from './Input.module.css';
export const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  console.log(value)
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={style.input}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={name}
        autoComplete=''
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
