import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
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
                      <img alt='' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.slide}>
                      <button className={styles.buttonLeft}>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                      </button>
                      <div className={styles.slideGallery}>
                        <img alt='' />
                        <img alt='' />
                        <img alt='' />
                        <img alt='' />
                      </div>
                      <button className={styles.buttonRight}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-7'>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.lvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlOne}>
                            <div className={styles.title}>Sunbaby Magic Bear Chair</div>
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
                        <div className='col-12'>
                          <div className={styles.lvlOne2}>
                            <div className={styles.rating}>
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={farStar} />
                              <FontAwesomeIcon icon={farStar} />
                              <FontAwesomeIcon icon={farStar} />
                              <span className={styles.views}>(0 reviews)</span>
                              <span className={styles.views + ' ' + styles.add}>
                                Add Your Review
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'></div>
                  <div className='col-12'></div>
                  <div className='col-12'></div>
                  <div className='col-12'></div>
                  <div className='col-12'></div>
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
