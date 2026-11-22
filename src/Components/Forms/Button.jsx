import React from 'react';
import styles from './Button.module.css';
export const Button = ({ children,disabled, ...props }) => {
  return (
    <button disabled={disabled}   className={styles.button}>
      {children}
    </button>
  );
};
