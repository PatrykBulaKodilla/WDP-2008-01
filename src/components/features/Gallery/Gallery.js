import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
//import { getGalleryPhotos } from '../../../redux/photosGalleryRedux';
//import StarRating from '../StarRating/StarRating';
//import ProductBox from '../../common/ProductBox/ProductBox';

class Gallery extends React.Component {
  state = {
    activePage: 1,
    activeCategory: 'FEATURED',
  };

  // handlePageChange(newPage) {
  //   this.setState({ activePage: newPage });
  // }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categoriesGallery, galleryPhotos, products } = this.props;
    const { activeCategory } = this.state;

    //const categoryProducts = products.filter(item => item.category === activeCategory);
    //const pagesCount = gallery.length;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
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
                            className={item.id === activeCategory && styles.active}
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.photoContent}>
                    <div className={styles.imageLeft}>
                      <img
                        alt='gallery-bed'
                        src='https://damnet.pl/1141/emilia-vic-krzeslo-pudrowy-roznogi-dab.jpg'
                      />
                      <div
                        className={`${styles.imageLeftColLeft} col-6 align-self-start`}
                      >
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
                          <Button variant='outline'>
                            <FontAwesomeIcon icon={faShoppingBasket}>
                              Add to cart
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                      <div className='col-6 align-self-end'>
                        <div className={styles.prices}>
                          <ul>
                            {products.map(products => (
                              <li key={products.id}>
                                <a>
                                  {products.price}
                                  {products.name}
                                  {products.stars}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={styles.galleryList}>
                      <div className='row'>
                        <div className='col-1'>
                          <button className={styles.button}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                          </button>
                        </div>
                        <div className='col-10'>
                          <ul className={styles.galleryPhotos}>
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
          </div>
          <div className='col-6'>
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
                  $50.80
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
    );
  }
}

Gallery.propTypes = {
  children: PropTypes.node,
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
      //category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      // promo: PropTypes.string,
      // Gallery: PropTypes.bool,
    })
  ),
};

Gallery.defaultProps = {
  categoriesGallery: [],
  galleryPhotos: [],
  products: [],
};

export default Gallery;
