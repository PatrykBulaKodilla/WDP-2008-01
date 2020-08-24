import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ChangeLanguage.module.scss';

const ChangeLanguage = () => (
  <div className={styles.root}>
    <div className={styles.category}>
      <ol>
        <li>
          Language
          <ul>
            <li>
              <a href='/#'>English</a>
            </li>
            <li>
              <a href='/#'>Polish</a>
            </li>
          </ul>
        </li>
      </ol>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
  </div>
);

ChangeLanguage.propTypes = {
  children: PropTypes.node,
};

export default ChangeLanguage;
