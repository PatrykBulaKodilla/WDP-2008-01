import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

class ProductPage extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='text-center'>This is ProductPage</div>
      </div>
    );
  }
}

// ProductPage.propTypes = {};

export default ProductPage;
