import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const userLogout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }, []);
  // Use Effect
  React.useEffect(() => {
    // Function LogOut

    async function autoLogin() {
      try {
        const token = window.localStorage.getItem('token');
        if (!token) return;
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const resp = await fetch(url, options);
        if (!resp.ok) throw new Error(`Token Invalido ${resp.status}`);

        const data = await resp.json();
        getUser(token);
      } catch (error) {
        console.log(error.message);
        userLogout();
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  // Function GetUser
  async function getUser(token) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_USER(token);
      const resp = await fetch(url, options);
      const json = await resp.json();
      if (!resp.ok) throw new Error('Usuario encontrado com sucesso');
      setData(json);
      setLogin(true);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    } finally {
    }
  }
  // Function GetToken
  async function userLogin(username, password) {
    console.log(username, password);
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResp = await fetch(url, options);
      const token = await tokenResp.json();

      if (!tokenResp.ok && !token.token)
        throw new Error(`${token.message.replace(/<\/?strong>/gi, '')} `);
      window.localStorage.setItem('token', token.token);
      await getUser(token.token);
      navigate('/conta');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
