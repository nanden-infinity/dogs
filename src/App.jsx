import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login/Login';
import { UserContext, UserStorage } from './UserContext';
import { User } from './Components/User/User';
import { ProtectRouter } from './Components/Helper/ProtectRouter';
const App = () => {
  const [username, Setusername] = React.useState('');
  // const userperfil = React.useContext(UserContext);
  // console.log(userperfil);
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectRouter>
              {<User/>}
            </ProtectRouter>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
