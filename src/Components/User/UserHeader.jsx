import React, { useEffect } from 'react';
import { UserHeaderNav } from './UserHeaderNav';
import style from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
export const UserHeader = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta':
        setTitle('Minha Conta');
        break;

      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      case '/conta/postar':
        setTitle('Poste sua photo');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);
  console.log(title);
  return (
    <header className={style.header}>
      <h1 data-title>{title}</h1>
      <UserHeaderNav setTitle={setTitle} />
    </header>
  );
};
