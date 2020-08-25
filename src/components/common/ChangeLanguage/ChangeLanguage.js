import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ChangeLanguage.module.scss';

class ChangeLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLanguage: 'English',
    };
  }

  setActiveLanguage(newLanguage) {
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
                <li
                  className={this.state.activeLanguage === 'english' ? 'active' : ''}
                  onClick={() => this.props.changeLanguage('English')}
                >
                  <a href='/#'>English</a>
                </li>
                <li
                  className={this.state.activeLanguage === 'polish' ? 'active' : ''}
                  onClick={() => this.props.changeLanguage('Polish')}
                >
                  <a href='/#'>Polish</a>
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
  changeLanguage: PropTypes.func,
};

window.localStorage.getItem('activeLanguage');

export default ChangeLanguage;
