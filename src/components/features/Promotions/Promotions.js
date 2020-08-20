import React from 'react';
import styles from './Promotion.module.scss';
import PropTypes from 'prop-types';

class Promotions extends React.Component {
  render() {
    const { promotions } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div className={styles.cardBig}>
                <img
                  className={styles.image}
                  alt={promotions[0].alt}
                  src={promotions[0].image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.opacityText}>
                  <p>{promotions[0].text_p}</p>
                  <span>{promotions[0].text_bold}</span>
                  <p className={styles.percent}>{promotions[0].text_value}</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.cardSmall1}>
                    <img
                      className={styles.image}
                      alt={promotions[1].alt}
                      src={promotions[1].image}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.cardSmall2}>
                    <img
                      className={styles.image}
                      alt={promotions[2].alt}
                      src={promotions[2].image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotions.propTypes = {
  promotions: PropTypes.array,
};

export default Promotions;
