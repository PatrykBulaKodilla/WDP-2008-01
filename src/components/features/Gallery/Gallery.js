import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
//import ProductBox from '../../common/ProductBox/ProductBox';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'FEATURED',
  };

  // handlePageChange(newPage) {
  //   this.setState({ activePage: newPage });
  // }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categoriesGallery } = this.props;
    console.log('In Render');
    const { activeCategory } = this.state;

    //const categoryProducts = products.filter(item => item.category === activeCategory);
    //const pagesCount = gallery.length;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto ' + styles.heading}>
                    <h3>FURNITURE GALLERY</h3>
                  </div>
                  <div className={'col ' + styles.menu}>
                    <ul>
                      {categoriesGallery.map(item => (
                        <li key={item.id}>
                          <a
                            href='/#'
                            className={item.id === activeCategory && styles.active}
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name}tekst
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className='row'>
              {gallery.slice(activePage, activePage + 1).map(item => (
                <div key={item.id}>
                </div>
              ))}
            </div> */}
            </div>
            <div className='col-6'>
              <p>PRZYKLADOWY TEKST</p>
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
  // products: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     name: PropTypes.string,
  //     // category: PropTypes.string,
  //     // price: PropTypes.number,
  //     // stars: PropTypes.number,
  //     // promo: PropTypes.string,
  //     Gallery: PropTypes.bool,
  //   })
  // ),
};

Gallery.defaultProps = {
  categoriesGallery: [],
  //products: [],
};

export default Gallery;
