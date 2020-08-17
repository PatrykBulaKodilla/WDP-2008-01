import React from 'react';
import styles from './Slider.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Swipeable from '../Swipeable/Swipeable';

class Slider extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage, productsCounter, event) {
    if (event !== undefined) event.preventDefault();
    if (newPage < productsCounter && newPage >= 0)
      this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined) event.preventDefault();
    this.setState({ activeCategory: newCategory });
  }

  handleLeftAction(pagesCount) {
    if (this.state.activePage < pagesCount - 1) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  }

  handleRightAction() {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  }

  render() {
    const { products } = this.props;
    const { activePage } = this.state;
    const productsCounter = products.length;
    return (
      <Swipeable
        leftAction={() => this.handleLeftAction()}
        rightAction={() => this.handleRightAction()}
      >
        {products.slice(activePage, activePage + 1).map(elem => (
          <div className={styles.root} key={elem.id}>
            <div className='container'>
              <div className={styles.photo}>
                <img src={elem.image} alt={elem.name} />
                <div className={styles.panel}>
                  <div className={styles.descriptionTitle}>
                    <p>indoor</p>
                    <p>furniture</p>
                  </div>
                  <div className={styles.descriptionSubitle}>
                    <p>Save up to 50% of all furniture</p>
                  </div>
                  <Button variant='small' className={styles.buttonDescription}>
                    SHOP NOW
                  </Button>
                </div>
                <div className='row'>
                  <Button
                    variant='small'
                    className={styles.button}
                    onClick={event =>
                      this.handlePageChange(activePage - 1, productsCounter, event)
                    }
                  >
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </Button>
                  <Button
                    variant='small'
                    className={styles.button}
                    onClick={event =>
                      this.handlePageChange(activePage + 1, productsCounter, event)
                    }
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Swipeable>
    );
  }
}

Slider.propTypes = {
  products: PropTypes.array,
};

export default Slider;
