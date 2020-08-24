import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';
import CartPopup from '../../features/CartPopup/CartPopupContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class CompanyClaim extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };
  }

  togglePopup = status => {
    this.setState({
      showPopup: status,
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className={`col text-left ${styles.mobileTel} ${styles.phoneNumber}`}>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />
                <span className={styles.mobileNumber}>2300 - 3560 - 222</span>
              </p>
            </div>
            <div className={`col text-center ${styles.mobileLogo}`}>
              <a href='/'>
                <img src='/images/logo.png' alt='Bazar' />
              </a>
            </div>
            <div className={`col text-right ${styles.mobileCart} ${styles.cart}`}>
              <a href='/#' className={styles.cartBox}>
                <div className={styles.cartIcon} onClick={() => this.togglePopup(true)}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
                <div className={styles.cartCounter}>123456</div>
              </a>
            </div>
          </div>
        </div>
        {this.state.showPopup && <CartPopup closePopup={this.togglePopup.bind(this)} />}
      </div>
    );
  }
}

// CompanyClaim.propTypes = {};

export default CompanyClaim;
