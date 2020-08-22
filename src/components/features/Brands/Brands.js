import React from 'react';
import styles from './Brands.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Swipeable from '../Swipeable/Swipeable';

class Brands extends React.Component {
  state = {
    activePage: 0,
    brandsListRef: React.createRef(),
  };

  addClass(domElement, className) {
    domElement.current.classList.add(className);
  }

  removeClass(domElement, className) {
    domElement.current.classList.remove(className);
  }

  nextPage() {
    if (
      this.state.activePage <
      Math.ceil(this.props.brands.length / this.props.brandsOnPage) - 1
    ) {
      this.removeClass(this.state.brandsListRef, styles.fadeInRight);
      this.removeClass(this.state.brandsListRef, styles.fadeInLeft);
      this.addClass(this.state.brandsListRef, styles.slideRight);

      setTimeout(() => {
        this.setState({ activePage: this.state.activePage + 1 });
        this.addClass(this.state.brandsListRef, styles.fadeInRight);
        this.removeClass(this.state.brandsListRef, styles.slideRight);
      }, 1000);
    }
  }

  previousPage() {
    if (this.state.activePage > 0) {
      this.removeClass(this.state.brandsListRef, styles.fadeInRight);
      this.removeClass(this.state.brandsListRef, styles.fadeInLeft);
      this.addClass(this.state.brandsListRef, styles.slideLeft);

      setTimeout(() => {
        this.setState({ activePage: this.state.activePage - 1 });
        this.addClass(this.state.brandsListRef, styles.fadeInLeft);
        this.removeClass(this.state.brandsListRef, styles.slideLeft);
      }, 1000);
    }
  }

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

  render() {
    const { brands, brandsOnPage } = this.props;
    const { activePage } = this.state;

    const thisBrands = this;
    const brandsCount = Math.ceil(brands.length / brandsOnPage);

    window.addEventListener('resize', () => {
      if (brandsCount < activePage) thisBrands.handlePageChange(brandsCount - 1);
    });

    return (
      <Swipeable
        leftAction={() => this.handleLeftAction(brandsCount)}
        rightAction={() => this.handleRightAction()}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.border}>
              <button className={styles.button} onClick={() => this.previousPage()}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </button>
              <div className={styles.sliderContainer}>
                <div ref={this.state.brandsListRef}>
                  <ul className={styles.brands}>
                    {brands
                      .slice(activePage * brandsOnPage, (activePage + 1) * brandsOnPage)
                      .map(brand => (
                        <li key={brand.id}>
                          <img src={brand.image} alt={brand.alt} />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <button
                className={`${styles.button} ${styles.button2}`}
                onClick={() => this.nextPage()}
              >
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  activePage: PropTypes.number,
  brandsOnPage: PropTypes.number,
  brandsListRef: PropTypes.object,
};

export default Brands;
