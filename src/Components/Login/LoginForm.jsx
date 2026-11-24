import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { Error } from '../Helper/Erro';

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
    <section className={`${styles.container} animeLeft`}>
      <h1 data-title>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error message={error} />}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2  className={`${styles.subtitle} ${styles.after}`}>Cadastre-se</h2>
        <p className={styles.semConta}>Ainda não possui uma conta? cadastre-se no site.</p>
        <Link className={`${stylesBtn.button}`} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};
