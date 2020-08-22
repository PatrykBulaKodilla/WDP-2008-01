import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ol>
        <li>
          Select a category
          <ul>
            <li>
              <a href='/#'>Select a category</a>
            </li>
            <li>
              <a href='/#'>Bed</a>
            </li>
            <li>
              <a href='/#'>Chair</a>
            </li>
            <li>
              <a href='/#'>Table</a>
            </li>
          </ul>
        </li>
      </ol>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input
        className={styles.searchInput}
        placeholder='Search products...'
        type='text'
        href='/product/:productId'
      />
      <button className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
