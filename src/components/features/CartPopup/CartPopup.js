import React from 'react';

import styles from './CartPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

class CartPopup extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <Button variant='small' className={styles.close}>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  onClick={() => this.props.closePopup()}
                ></FontAwesomeIcon>
              </Button>
              <div className={styles.panelBar}>
                <div className={styles.heading}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faCheck}
                  ></FontAwesomeIcon>
                  <h3>Product successfully added to your cart</h3>
                </div>
                <div className={styles.cartProducts}>
                  <div className={styles.cartProduct}>
                    <Button variant='small' className={styles.delete}>
                      <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    </Button>
                    <img
                      className={styles.image}
                      src={products[1].image}
                      alt='productFurniture'
                    />
                    <span className={styles.productName}>{products[1].name}</span>
                    <span className={styles.price}>${products[1].price}</span>
                    <div className={styles.quantity}>
                      <Button variant='outline'>
                        <span>-</span>
                      </Button>
                      <input
                        type='text'
                        defaultValue='2'
                        className={styles.quantityNumber}
                      ></input>
                      <Button variant='outline'>
                        <span>+</span>
                      </Button>
                    </div>
                  </div>
                  <div className={styles.cartProduct}>
                    <Button variant='small' className={styles.delete}>
                      <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    </Button>
                    <img
                      className={styles.image}
                      src={products[0].image}
                      alt='productFurniture'
                    />
                    <span className={styles.productName}>{products[0].name}</span>
                    <span className={styles.price}>${products[0].price}</span>
                    <div className={styles.quantity}>
                      <Button variant='outline'>-</Button>
                      <input
                        type='text'
                        defaultValue='2'
                        className={styles.quantityNumber}
                      ></input>
                      <Button variant='outline'>+</Button>
                    </div>
                  </div>
                </div>
                <div className={styles.cartSummary}>
                  <span>Total:</span>
                  <span>$120.00</span>
                </div>
                <div className={styles.buttons}>
                  <Button variant='small' className={styles.button}>
                    View cart
                  </Button>
                  <Button variant='small' className={styles.button}>
                    Checkout
                  </Button>
                  <Button
                    variant='small'
                    className={styles.button}
                    onClick={() => this.props.closePopup()}
                  >
                    Continue shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CartPopup.propTypes = {
  closePopup: PropTypes.func,

  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default CartPopup;
