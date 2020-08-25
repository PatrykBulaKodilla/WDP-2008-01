import React from 'react';
import styles from './SuggestedProducts.module.scss';
import PropTypes from 'prop-types';

import HotDeals from '../../common/HotDeals/HotDealsContainter';
import Slider from '../Slider/Slider';
import Swipeable from '../Swipeable/Swipeable';

class SuggestedProducts extends React.Component {
  state = {
    activeDeal: 0,
    autoPlayTime: 3000,
    pauseAutoPlay: false,
  };

  handlePageChange(newPage) {
    this.setState({ activeDeal: newPage, autoPlayTime: 3000 });
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined) event.preventDefault();
    this.setState({ activeCategory: newCategory });
  }

  handleLeftAction(pagesCount) {
    if (this.state.activeDeal < pagesCount - 1) {
      this.handlePageChangeFade(this.state.activeDeal + 1);
    }
  }

  handleRightAction() {
    if (this.state.activeDeal > 0) {
      this.handlePageChangeFade(this.state.activeDeal - 1);
    }
  }

  addClass(domElement, className) {
    domElement.current.classList.add(className);
  }

  removeClass(domElement, className) {
    domElement.current.classList.remove(className);
  }

  handlePageChangeFade(newPage, event) {
    if (event !== undefined) event.preventDefault();
    this.removeClass(this.props.hotDealsListRef, styles.fadeIn);
    this.addClass(this.props.hotDealsListRef, styles.fadeOut);

    setTimeout(() => {
      this.handlePageChange(newPage);
      this.addClass(this.props.hotDealsListRef, styles.fadeIn);
      this.removeClass(this.props.hotDealsListRef, styles.fadeOut);
    }, 1000);
  }

  autoPlay(pagesCount) {
    if (this.state.activeDeal + 1 < pagesCount) {
      this.handlePageChangeFade(this.state.activeDeal + 1);
    } else {
      this.handlePageChangeFade(0);
    }
  }

  render() {
    const dots = [];
    const { activeDeal, pauseAutoPlay } = this.state;
    const { hotDeals, suggestedSlider } = this.props;
    const pagesCount = hotDeals.length;

    setTimeout(() => {
      if (!pauseAutoPlay) this.autoPlay(pagesCount);
    }, this.state.autoPlayTime);

    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => {
              this.handlePageChangeFade(i, event);
              this.setState({ pauseAutoPlay: true });
              setTimeout(() => {
                this.setState({ pauseAutoPlay: false });
              }, 10000);
            }}
            className={i === activeDeal ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.hotdeals} col col-4`}>
              <div className={styles.panelBar}>
                <div className='row'>
                  <div className='col-8'>
                    <h3 className={styles.heading}>Hot Deals</h3>
                  </div>
                  <div className='col-4'>
                    <div className={styles.menu}>
                      <div className={styles.dots}>
                        <ul>{dots}</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Swipeable
                leftAction={() => this.handleLeftAction(pagesCount)}
                rightAction={() => this.handleRightAction()}
              >
                {hotDeals.slice(activeDeal, activeDeal + 1).map(elem => (
                  <div key={elem.id} ref={this.props.hotDealsListRef}>
                    <HotDeals name={elem.name} price={elem.price} image={elem.image} />
                  </div>
                ))}
              </Swipeable>
            </div>
            <div className={`${styles.slider} col col-12 col-lg-8`}>
              <Slider products={suggestedSlider} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SuggestedProducts.propTypes = {
  hotDeals: PropTypes.array,
  suggestedSlider: PropTypes.array,
  hotDealsListRef: PropTypes.object,
};

SuggestedProducts.defaultProps = {
  hotDealsListRef: React.createRef(),
};

export default SuggestedProducts;
