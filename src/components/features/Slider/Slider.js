import React from 'react';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

class Slider extends React.Component {
  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.photo}>
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
              <Button variant='small' className={styles.button}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small' className={styles.button}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
