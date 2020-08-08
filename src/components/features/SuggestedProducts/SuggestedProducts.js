import React from 'react';
import styles from './SuggestedProducts.module.scss';
import HotDeals from '../../common/HotDeals/HotDeals';
import Slider from '../Slider/Slider';

class SuggestedProducts extends React.Component {
  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const pagesCount = 3;
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a onClick={() => this.handlePageChange(i)}>page {i}</a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
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
              <HotDeals />
            </div>
            <div className='col-8'>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedProducts;
