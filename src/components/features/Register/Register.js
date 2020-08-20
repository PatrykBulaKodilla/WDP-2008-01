import React from 'react';

import Button from '../../common/Button/Button';
import styles from './Register.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const register = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.register}>
          <h4>
            <small>Need an account?</small>
          </h4>
          <div className={`${styles.account} row col-12`}>
            <div className={`${styles.accountDataLeft} col-4`}>
              <p>Email</p>
              <p>Name</p>
              <p>Surname</p>
              <p>Organisation</p>
            </div>
            <div className={`${styles.accountDataRight} col-8`}>
              <input type='email' name='email' placeholder='' />
              <input type='name' name='name' placeholder='' />
              <input type='surname' name='surname' placeholder='' />
              <input type='organisation' name='organisation' placeholder='' />
            </div>
          </div>
          <h3>
            <small>Address</small>
          </h3>
          <div className={`${styles.address} row col-12`}>
            <div className={`${styles.addressDataLeft} col-4`}>
              <p>Address</p>
              <p>ZIP</p>
              <p>State</p>
              <p>City</p>
              <p>Country</p>
              <p>Requested profile</p>
            </div>
            <div className={`${styles.addressDataRight} col-8`}>
              <input type='address' name='address' placeholder='' />
              <input type='zip' name='zip' placeholder='' />
              <input type='state' name='state' placeholder='' />
              <input type='city' name='city' placeholder='' />
              <input type='country' name='country' placeholder='' />
              <div className={styles.registeredProfile}>
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                <a href='/#'>Registered user</a>
              </div>
            </div>
          </div>
          <Button type='submit' className={styles.registerButton}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default register;
