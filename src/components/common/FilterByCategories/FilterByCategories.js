import React from 'react';

import styles from './FilterByCategories.module.scss';

class FilterByCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategories: 'furniture',
    };
  }

  setActiveCategories(newActiveCategories) {
    this.setState({ activeCategories: newActiveCategories });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.filterCategoriesTitle}>
            <p>filter</p>
            <p>by</p>
            <p>categories</p>
          </div>
          <div className={styles.filterCategories}>
            <div
              className={`${styles.furniture} ${
                this.state.activeCategories === 'furniture' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('furniture')}
            >
              <p>
                {'>'}
                <a href='# '>Furniture</a>
              </p>
              <span className={styles.numberCircle}>3</span>
            </div>
            <div
              className={`${styles.sofa} ${
                this.state.activeCategories === 'sofa' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('sofa')}
            >
              <p>
                {'>'}
                <a href='# '>Sofa</a>
              </p>
              <span className={styles.numberCircle}>4</span>
            </div>
            <div
              className={`${styles.chair} ${
                this.state.activeCategories === 'chair' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('chair')}
            >
              <p>
                {'>'}
                <a href='# '>Chair</a>
              </p>
              <span className={styles.numberCircle}>7</span>
            </div>
            <div
              className={`${styles.table} ${
                this.state.activeCategories === 'table' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('table')}
            >
              <p>
                {'>'}
                <a href='# '>Table</a>
              </p>
              <span className={styles.numberCircle}>15</span>
            </div>
            <div
              className={`${styles.bedroom} ${
                this.state.activeCategories === 'bedroom' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('bedroom')}
            >
              <p>
                {'>'}
                <a href='# '>Bedroom</a>
              </p>
              <span className={styles.numberCircle}>8</span>
            </div>
            <div
              className={`${styles.dining} ${
                this.state.activeCategories === 'dining' ? 'active' : ''
              }`}
              onClick={() => this.setActiveCategories('dining')}
            >
              <p>
                {'>'}
                <a href='# '>Dining</a>
              </p>
              <span className={styles.numberCircle}>2</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterByCategories;
