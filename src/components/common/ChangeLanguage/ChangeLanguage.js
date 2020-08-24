import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ChangeLanguage.module.scss';

class ChangeLanguage extends React.Component {
  state = {
    activeLanguage: 'english',
  };

  handleLanguageChange(newLanguage) {
    this.setState({ activeLanguage: newLanguage });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.category}>
          <ol>
            <li>
              Language
              <ul>
                <li>
                  <a href='/#' onClick={event => this.handleLanguageChange(event)}>
                    English
                  </a>
                </li>
                <li>
                  <a href='/#' onClick={event => this.handleLanguageChange(event)}>
                    Polish
                  </a>
                </li>
              </ul>
            </li>
          </ol>
          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
        </div>
      </div>
    );
  }
}

ChangeLanguage.propTypes = {
  language: PropTypes.array,
  handleLanguageChange: PropTypes.func,
};

ChangeLanguage.defaultProps = {
  language: [],
};

export default ChangeLanguage;
