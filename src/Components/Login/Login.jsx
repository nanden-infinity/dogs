import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordLostReset } from './LoginPasswordLostReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import { User } from '../User/User';
export const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login)
    return (
      <>
        <Navigate to="/conta" />

      </>
    );
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="conta" element={<User />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordLostReset />} />
        </Routes>
      </div>
    </section>
  );
};
