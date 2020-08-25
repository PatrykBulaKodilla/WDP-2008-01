import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDeals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { currencyChange } from '../../../utils/CurrencyChange';

const HotDeals = ({ name, price, promo, stars, currency, image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt='' />
      <div className={styles.button}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
      <div className={styles.countdown}>
        <div className={styles.countdownDot}>
          <p>25</p>
          <p>days</p>
        </div>
        <div className={styles.countdownDot}>
          <p>10</p>
          <p>hrs</p>
        </div>
        <div className={styles.countdownDot}>
          <p>45</p>
          <p>mins</p>
        </div>
        <div className={styles.countdownDot}>
          <p>30</p>
          <p>secs</p>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='/#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small' className={styles.priceButton}>
          {currencyChange(currency, 300.0)}
        </Button>
      </div>
    </div>
  </div>
);

HotDeals.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  currency: PropTypes.string,
};

export default HotDeals;
