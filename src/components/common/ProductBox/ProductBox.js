import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const productInFavorites = (productId, favoriteArray) =>
  favoriteArray !== undefined
    ? favoriteArray.filter(favorite => favorite === productId).length
    : 0;

const ProductBox = ({
  id,
  name,
  price,
  oldPrice,
  promo,
  stars,
  favoriteProducts,
  setFavoriteProduct,
  comparison,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
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
        <Button
          variant='outline'
          Comp='button'
          className={styles.faHeart}
          className={`${styles.favoriteButton} ${
            productInFavorites(id, favoriteProducts) > 0 ? styles.active : undefined
          }`}
          onClick={() => setFavoriteProduct(id)}
        >
          {/*<Button variant='outline' className={styles.faHeart} className={favorite}>*/}
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={styles.faExchangeAlt}
          className={comparison}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small' className={styles.oldPriceButton}>
          {oldPrice}
        </Button>
        <Button noHover variant='small' className={styles.priceButton}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  favoriteProducts: PropTypes.array,
  setFavoriteProduct: PropTypes.func,
  comparison: PropTypes.string,
};

export default ProductBox;
