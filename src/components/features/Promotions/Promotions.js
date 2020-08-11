import React from 'react';
import styles from './Promotion.module.scss';

const Promotions = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.cardBig}>
            <img
              className={styles.image}
              alt='promo-1'
              src='https://elmar.home.pl/files/ritmo_(2)-1.jpg'
            />
          </div>
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.cardSmall1}>
                <img
                  className={styles.image}
                  alt='promo-2'
                  src='https://houseform.pl/!data/gallery/b_161449_22092014_largo_houseform.jpg'
                />
              </div>
            </div>
            <div className='col-12'>
              <div className={styles.cardSmall2}>
                <img
                  className={styles.image}
                  alt='promo-3'
                  src='https://klimapoint.pl/wp-content/uploads/2020/04/gree2020.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Promotions;
