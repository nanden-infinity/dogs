import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import style from '../../Components/Header.module.css';

export const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValid = username.validate();
    const passwordValid = password.validate();
    if (usernameValid && passwordValid) {
      await userLogin(username.value, password.value);
      
    }
  };

  return (
    <section className={style.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p style={{color:"#e51",marginBlock:".9rem"}}>{error}</p>}
      </form>
      <Link className="" to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};
