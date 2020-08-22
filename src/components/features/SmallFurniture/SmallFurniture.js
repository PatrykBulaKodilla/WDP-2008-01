import React from 'react';

import styles from './SmallFurniture.module.scss';
import StarRating from '../../common/StarRating/StarRating';
import Button from '../../common/Button/Button';

class SmallFurniture extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Featured products</h2>
        <div className='flex-column'>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p className={styles.productName}>Office Chair</p>
                <p className={styles.price}>$350.00</p>
                <StarRating stars={2} variant='dark' />
                <Button className={styles.button} variant='small'>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p className={styles.productName}>Office Chair</p>
                <p className={styles.price}>$350.00</p>
                <StarRating stars={2} variant='dark' />
                <Button className={styles.button} variant='small'>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p className={styles.productName}>Office Chair</p>
                <p className={styles.price}>$350.00</p>
                <StarRating stars={2} variant='dark' />
                <Button className={styles.button} variant='small'>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallFurniture;
