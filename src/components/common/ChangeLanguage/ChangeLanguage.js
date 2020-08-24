import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ChangeLanguage.module.scss';

class ChangeLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.state = {
      activeLanguage: 0,
    };
  }

  toggleLanguage(language, e) {
    this.setState({ activeLanguage: language });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.category}>
          <ol>
            <li>
              Language
              <ul>
                <li
                  className={this.state.activeLanguage === 0 ? 'active' : null}
                  onClick={this.toggleLanguage.bind(this, 0)}
                >
                  <a>English</a>
                </li>
                <li
                  className={this.state.activeLanguage === 1 ? 'active' : null}
                  onClick={this.toggleLanguage.bind(this, 1)}
                >
                  <a>Polish</a>
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
  toggleLanguage: PropTypes.func,
};

ChangeLanguage.defaultProps = {
  language: [],
};

window.localStorage.getItem('activeLanguage');

export default ChangeLanguage;
