import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Filter from '../../common/Filter/Filter';
import SmallFurniture from '../../features/SmallFurniture/SmallFurniture';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col col-sm-12 col-lg-9 order-3 order-md-1`}>LEFT</div>
          <div className='w-100 d-block d-md-none order-2'></div>
          <div className={`col col-sm-12 col-lg-3 order-1 order-md-3`}>
            <Filter />
            <SmallFurniture />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
