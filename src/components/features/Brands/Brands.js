import React from 'react';
import styles from './Brands.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  nextPage() {
    if (
      this.state.activePage <
      this.props.brands.length / this.props.brandsOnPage - 1
    ) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  }

  previousPage() {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  }

  render() {
    const { brands, brandsOnPage } = this.props;
    const { activePage } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.border}>
            <button className={styles.button} onClick={() => this.previousPage()}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>
            <div className='row'>
              <div className={`col-auto`}>
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
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  activePage: PropTypes.number,
  brandsOnPage: PropTypes.number,
};

export default Brands;
