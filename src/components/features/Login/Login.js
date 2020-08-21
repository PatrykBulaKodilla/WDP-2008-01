import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <div>
      <div className='container'>
        <div className={`col col-sm-12 col-lg-12 order-md-1 ${styles.containerFrame}`}>
          <div className={`col-lg-6 ${styles.frame}`}>
            <h1>Login</h1>
            <h2>Adres e-mail lub identyfikator istniejącej usługi</h2>
            <form>
              <TextField
                id='filled-required'
                label='Login'
                variant='filled'
                className={styles.login}
              />
              <TextField
                id='filled-password-input'
                label='Twoje Hasło'
                type='password'
                autoComplete='current-password'
                variant='filled'
                className={styles.password}
              />
              <Button variant='contained'>Zaloguj się</Button>
              <a href='/#'>Przypomnij hasło</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Login;
