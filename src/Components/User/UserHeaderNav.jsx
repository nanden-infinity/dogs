import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import SairDog from '../../Components/../Assets/sair.svg?react';
import Estatisticas from '../../Components/../Assets/estatisticas.svg?react';
import MinhasPhotos from '../../Components/../Assets/feed.svg?react';
import AdicionarPhoto from '../../Components/../Assets/adicionar.svg?react';
import style from './UserHeaderNav.module.css';
// import SairDog from '../../Components/../Assets/sair.svg?react';
// import Dogs from '../Assets/dogs.svg?react';'
{
  /* <NavLink to="/conta" className={({ isActive }) => isActive ? 'ativo' : ''}> */
}
export const UserHeaderNav = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const handleLogOut = () => {
    userLogout();
    navigate('/login');
  };
  return (
    <nav className={style.nav}>
      <NavLink to="/conta">
        <MinhasPhotos /> {mobile && 'MinhasPhotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <Estatisticas /> {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarPhoto />
        {mobile && 'Adicionar Photo'}
      </NavLink>
      <button onClick={handleLogOut}>
        <SairDog />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};
