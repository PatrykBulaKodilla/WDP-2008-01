import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import CurrencyToggle from '../../features/CurrencyToggle/CurrencyToggleContainer';

import ChangeLanguage from '../../common/ChangeLanguage/ChangeLanguageContainer';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <CurrencyToggle />
            </li>
            <li>
              <ChangeLanguage />
            </li>
            <li>
              <a href='/#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <span className={styles.topBarSpan}>Login</span>
              </a>
            </li>
            <li>
              <a href='/register'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <span className={styles.topBarSpan}>Register</span>
              </a>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
