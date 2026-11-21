import React from 'react';
import { Link } from 'react-router-dom';
import { GET_USER, TOKEN_POST } from '../../api';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
export const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) getUser(token);
  }, []);
  const getUser = async (token) => {
    try {
      const { url, options } = GET_USER(token);
      const userResp = await fetch(url, options);
      if (!userResp.ok) throw new Error('Fetch falhado');
      const userData = await userResp.json();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    console.log(url, options);
    e.preventDefault();
    try {
      if (!username.validate() && !password.validate())
        return alert('nao valido');
      const resp = await fetch(`${url}jwt-auth/v1/token`, options);
      const { token } = await resp.json();
      localStorage.setItem('token', token);
      getUser(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link className="" to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};
