import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { USE_POST } from '../../api';
import { UserContext } from '../../UserContext';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../Helper/Erro';
export const LoginCreate = () => {
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { url, options } = USE_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { resp } = await request(url, options);
      // if (!resp.ok) throw new Error('Erro na criacao do Usuario ' + resp.ok);
      // const data = await resp.json();
      console.log(resp)
      userLogin(username.value, password.value);
    } catch (error) {
      console.log(error);
    }
  };
  // label, type, name, value, onChange, onBlur, error
  return (
    <section className="animeLeft">
      <h1 data-title>Registra-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="Username" {...username} />
        <Input label="Email" type="email" name="Email" {...email} />
        <Input label="Senha" type="password" name="Password" {...password} />
        {loading ? (
          <Button disabled>Registrando...</Button>
        ) : (
          <Button>Registrar</Button>
        )}
        <Error message={error} />
      </form>
    </section>
  );
};
