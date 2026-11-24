import React from 'react';
import styles from './Footer.module.css';
import { UserContext } from '../UserContext';
export const Footer = () => {
  const {login} = React.useContext(UserContext);
  return <div className={`${login ? styles.footer : styles.foot}`}>Footer</div>;
};
