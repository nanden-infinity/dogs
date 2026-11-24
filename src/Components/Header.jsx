import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../UserContext';

export const Header = () => {
  const { data,userLogout } = React.useContext(UserContext);


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.log} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/login" className={styles.login}>
            {data.nome}
            <button className='btn' onClick={userLogout}>LogOut</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            {data && data.nome} Login / Criar
          </Link>
        )}
        
      </nav>
    </header>
  );
};
