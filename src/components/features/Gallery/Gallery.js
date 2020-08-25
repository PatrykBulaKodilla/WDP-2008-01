import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faArrowLeft,
  faArrowRight,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { currencyChange } from '../../../utils/CurrencyChange';

class Gallery extends React.Component {
  state = {
    activePage: 1,
    activeCategory: 'FEATURED',
    activeProduct: 1,
  };

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categoriesGallery, galleryPhotos, products, stars, currency } = this.props;
    const { activeCategory, activeProduct } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-sm-12 col-lg-6'>
              <div className={styles.left}>
                <div className={styles.panelBar}>
                  <div className='row no-gutters align-items-end'>
                    <div className={'col-auto ' + styles.heading}>
                      <h3>FURNITURE GALLERY</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.galleryPhotos}>
                  <div className={styles.menu}>
                    <ul>
                      {categoriesGallery.map(item => (
                        <li key={item.id}>
                          <a
                            href='/#'
                            className={
                              item.id === activeCategory ? styles.active : undefined
                            }
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.photoContent}>
                    <div className={`${styles.imageLeft} row justify-content-between`}>
                      <img
                        alt='gallery-bed'
                        src='https://www.ikea.com/pl/pl/images/products/strandmon-wing-chair__0531313_PE647261_S5.JPG?f=xxxl'
                      />
                      <div className={`${styles.imageLeftColLeft} col-6`}>
                        <div className={styles.outlines}>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
                          </Button>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                          </Button>
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faExchangeAlt}>
                              Add to compare
                            </FontAwesomeIcon>
                          </Button>
                          <Tooltip title='Add to cart' placement='right' arrow>
                            <Button variant='outline'>
                              <FontAwesomeIcon
                                icon={faShoppingBasket}
                              ></FontAwesomeIcon>
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                      <div
                        className={`${styles.imageLeftColRight} col-6 align-self-end`}
                      >
                        <div className={styles.prices}>
                          <ul>
                            {products
                              .slice(activeProduct, activeProduct + 1)
                              .map(products => (
                                <li key={products.id}>
                                  <div className={styles.priceBox}>
                                    <p>${products.price}</p>
                                    <p className={styles.oldPrice}>
                                      <small>{products.oldPrice}</small>
                                    </p>
                                  </div>
                                  <div className={styles.nameBox}>
                                    <p>{products.name}</p>
                                    <div className={styles.stars}>
                                      {[1, 2, 3, 4, 5].map(i => (
                                        <a key={i} href='/#'>
                                          {i <= stars ? (
                                            <FontAwesomeIcon icon={faStar}>
                                              {i} stars
                                            </FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon icon={farStar}>
                                              {i} stars
                                            </FontAwesomeIcon>
                                          )}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={styles.galleryList}>
                      <div className={`${styles.galleryListSlider} row`}>
                        <div className='col-1'>
                          <button className={styles.button}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                          </button>
                        </div>
                        <div className='col-10'>
                          <ul className={styles.galleryListPhotos}>
                            {galleryPhotos.map(galleryPhotos => (
                              <li key={galleryPhotos.id}>
                                <img
                                  src={galleryPhotos.image}
                                  alt={galleryPhotos.alt}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className='col-1'>
                          <button className={styles.button + ' ' + styles.button2}>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6 col-sm-12 col-lg-6'>
              <div className={styles.right}>
                <img
                  className={styles.image}
                  alt='gallery-bed'
                  src='https://pictureserver.net/images/cache/undef_src_sa_picid_694714_x_1800_type_whitesh_image.jpg?ver=27'
                />
                <div className={styles.opacityText}>
                  <p>
                    <small>
                      <small>
                        <small>FROM</small>
                      </small>
                    </small>{' '}
                    {currencyChange(currency, 50.8)}
                  </p>
                  <span>Bedroom Bed</span>
                  <Button variant='outline' className={styles.buttonDescription}>
                    SHOP NOW
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

Gallery.propTypes = {
  children: PropTypes.node,
  stars: PropTypes.number,
  categoriesGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  galleryPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      galleryPhotos: PropTypes.array,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      oldprice: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      gallery: PropTypes.bool,
    })
  ),
  currency: PropTypes.string,
};

Gallery.defaultProps = {
  categoriesGallery: [],
  galleryPhotos: [],
  products: [],
};

export default Gallery;
