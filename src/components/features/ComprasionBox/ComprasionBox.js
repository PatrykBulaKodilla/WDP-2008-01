import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

import styles from './ComprasionBox.module.scss';

class ComprasionBox extends React.Component {
  render() {
    const { compare, removeFromCompare, removeAllFromCompare } = this.props;
    if (compare.length > 0) {
      return (
        <div className={styles.root}>
          <div className={styles.products}>
            {compare.map(product => (
              <div className={styles.productView} key={product.id}>
                <ProductBox {...product} />
                <div
                  className={styles.productAlternative}
                  onClick={() => removeFromCompare(product)}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faTimes} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button variant='outline' className={styles.buttonCompare}>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </Button>
            <Button variant='outline' onClick={() => removeAllFromCompare()}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

ComprasionBox.propTypes = {
  compare: PropTypes.array,
  removeFromCompare: PropTypes.func,
  removeAllFromCompare: PropTypes.func,
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
};

ComprasionBox.defaultProps = {
  compare: [],
  products: [],
};
export default ComprasionBox;
