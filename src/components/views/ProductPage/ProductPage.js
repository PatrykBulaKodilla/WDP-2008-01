import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProductPage extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.frame}>
            <div className='row'>
              <div className='col-5'>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.bigPic}>
                      <img />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.slide}>
                      <button className={styles.buttonLeft}>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                      </button>
                      <div className={styles.slideGallery}>
                        <img className={styles.imgLeft} />
                        <img />
                        <img />
                        <img className={styles.imgRight} />
                      </div>
                      <button className={styles.buttonRight}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-7'>
                <div className={styles.rightButtons}>
                  <button>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ProductPage.propTypes = {};

export default ProductPage;
