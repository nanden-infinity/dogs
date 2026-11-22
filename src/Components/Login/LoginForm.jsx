import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
export const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const { userLogin } = React.useContext(UserContext);

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
