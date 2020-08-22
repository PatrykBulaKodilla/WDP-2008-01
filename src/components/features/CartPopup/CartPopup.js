import React from 'react';

import styles from './CartPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class CartPopup extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.overlay} id='overlay'>
            <div className={styles.modal} id='linkModal'>
              <Button variant='small' className={styles.close}>
                <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
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
                      src='https://www.ikea.com/images/dining-sets-03d1940e32032e44c82af0c827a2494a.jpg?f=s'
                      alt='productFurniture'
                    />
                    <span className={styles.productName}>Aean Ru Brisique 14</span>
                    <span className={styles.price}>$30.00</span>
                    <div className={styles.quantity}>
                      <Button variant='outline'>
                        <span>-</span>
                      </Button>
                      <input
                        type='text'
                        value='2'
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
                      src='https://www.ikea.com/images/dining-sets-03d1940e32032e44c82af0c827a2494a.jpg?f=s'
                      alt='productFurniture'
                    />
                    <span className={styles.productName}>Aean Ru Brisique 14</span>
                    <span className={styles.price}>$30.00</span>
                    <div className={styles.quantity}>
                      <Button variant='outline'>
                        <span>-</span>
                      </Button>
                      <input
                        type='text'
                        value='2'
                        className={styles.quantityNumber}
                      ></input>
                      <Button variant='outline'>
                        <span>+</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.cartSummary}>
                  <span>Total:</span>
                  <span>$60.00</span>
                </div>
                <div className={styles.buttons}>
                  <Button variant='small' className={styles.button}>
                    View cart
                  </Button>
                  <Button variant='small' className={styles.button}>
                    Checkout
                  </Button>
                  <Button variant='small' className={styles.button}>
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

export default CartPopup;
