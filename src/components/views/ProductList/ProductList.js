import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Filter from '../../common/Filter/Filter';

import FilterByColor from '../../common/FilterByColor/FilterByColor';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import SmallFurniture from '../../features/SmallFurniture/SmallFurniture';

const ProductList = ({ shopList }) => {
  let activePage = 0;
  let ProductsOnPage = 20;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col col-sm-12 col-lg-9 order-3 order-md-1`}>
            <div className='row'>
              {shopList
                .slice(activePage * ProductsOnPage, (activePage + 1) * ProductsOnPage)
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className='w-100 d-block d-md-none order-2'></div>
          <div className={`col col-sm-12 col-lg-3 order-1 order-md-3`}>
            <Filter />
            <SmallFurniture />
            <div className="filterColor">
              <div className={styles.filterColorTitle}>
                <FilterByColor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  shopList: PropTypes.array,
};

export default ProductList;
