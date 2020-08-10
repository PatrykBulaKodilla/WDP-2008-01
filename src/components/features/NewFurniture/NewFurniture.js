import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handleLeftAction(pagesCount) {
    if (this.state.activePage < pagesCount - 1) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  }

  handleRightAction() {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  addClass(domElement, className) {
    domElement.current.classList.add(className);
  }

  removeClass(domElement, className) {
    domElement.current.classList.remove(className);
  }

  handleCategoryChangeFade(newCategory, event) {
    event.preventDefault();
    this.removeClass(this.props.furnitureListRef, styles.fadeIn);
    this.addClass(this.props.furnitureListRef, styles.fadeOut);

    setTimeout(() => {
      this.handlePageChange(0);
      this.handleCategoryChange(newCategory);
      this.addClass(this.props.furnitureListRef, styles.fadeIn);
      this.removeClass(this.props.furnitureListRef, styles.fadeOut);
    }, 1000);
  }

  handlePageChangeFade(newPage, event) {
    event.preventDefault();
    this.removeClass(this.props.furnitureListRef, styles.fadeIn);
    this.addClass(this.props.furnitureListRef, styles.fadeOut);

    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.addClass(this.props.furnitureListRef, styles.fadeIn);
      this.removeClass(this.props.furnitureListRef, styles.fadeOut);
    }, 1000);
  }

  render() {
    const { categories, products, favoriteProducts, setFavoriteProduct } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => this.handlePageChangeFade(i, event)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        leftAction={() => this.handleLeftAction(pagesCount)}
        rightAction={() => this.handleRightAction()}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          href='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={event =>
                            this.handleCategoryChangeFade(item.id, event)
                          }
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={`row ${styles.fadeIn}`} ref={this.props.furnitureListRef}>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                    <ProductBox
                      {...item}
                      favoriteProducts={favoriteProducts}
                      setFavoriteProduct={setFavoriteProduct}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  favoriteProducts: PropTypes.array,
  setFavoriteProduct: PropTypes.func,
  furnitureListRef: PropTypes.object,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  furnitureListRef: React.createRef(),
};

export default NewFurniture;
