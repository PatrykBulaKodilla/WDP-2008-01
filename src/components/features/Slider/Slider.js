import React from 'react';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Swipeable from '../Swipeable/Swipeable';

class Slider extends React.Component {
  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
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
    return (
      <Swipeable
        leftAction={() => this.handleLeftAction()}
        rightAction={() => this.handleRightAction()}
      >
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
      </Swipeable>
    );
  }
}

export default Slider;
