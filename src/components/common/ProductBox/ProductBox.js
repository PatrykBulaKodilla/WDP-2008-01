import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';
import { currencyChange } from '../../../utils/CurrencyChange';

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
  image,
  favoriteProducts,
  setFavoriteProduct,
  addToCompare,
  comparison,
  currency,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <a href={'/product/' + id}>
        <img className={styles.image} src={image} alt='productFurniture' />
      </a>
      <div className={styles.buttons}>
        <Button href={'/product/' + id} variant='small'>
          Quick View
        </Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        <StarRating stars={stars} />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant='outline'
          Comp='button'
          className={
            styles.faHeart +
            ' ' +
            styles.favoriteButton +
            ' ' +
            `${
              productInFavorites(id, favoriteProducts) > 0 ? styles.active : undefined
            }`
          }
          onClick={() => setFavoriteProduct(id)}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={comparison + ' ' + styles.faExchangeAlt}
          onClick={event => {
            addToCompare(name, id, image);
            event.preventDefault();
          }}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small' className={styles.oldPriceButton}>
          {oldPrice}
        </Button>
        <Button noHover variant='small' className={styles.priceButton}>
          {currencyChange(currency, price)}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  favoriteProducts: PropTypes.array,
  setFavoriteProduct: PropTypes.func,
  addToCompare: PropTypes.func,
  comparison: PropTypes.bool,
  currency: PropTypes.string,
};

export default ProductBox;
