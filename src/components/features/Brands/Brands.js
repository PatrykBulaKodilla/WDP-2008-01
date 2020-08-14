import React from 'react';
import styles from './Brands.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.border}>
            <div className='row'>
              <div className='col-1'>
                <button className={styles.button}>
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </button>
              </div>
              <div className='col-10'>
                <ul className={styles.brands}>
                  {brands.map(brand => (
                    <li key={brand.id}>
                      <img src={brand.image} alt={brand.alt} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-1'>
                <button className={styles.button + ' ' + styles.button2}>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
