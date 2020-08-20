import React from 'react';

import styles from './SmallFurniture.module.scss';
import StarRating from '../../common/StarRating/StarRating';
import Button from '../../common/Button/Button';

class SmallFurniture extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Small Furniture</h2>
        <div className='flex-column'>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p>Office Chair</p>
                <p>$350.00</p>
                <StarRating />
                <Button variant='small'>Add to cart</Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p>Office Chair</p>
                <p>$350.00</p>
                <StarRating />
                <Button variant='small'>Add to cart</Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className={`row ${styles.product}`}>
              <div className={`col-6 ${styles.image}`}></div>
              <div className={`col-6 ${styles.desc}`}>
                <p>Office Chair</p>
                <p>$350.00</p>
                <StarRating />
                <Button variant='small'>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallFurniture;
