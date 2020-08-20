import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import Swipeable from '../Swipeable/Swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

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

  handlePageChange(newPage, event) {
    event.preventDefault();
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;
    const pagesCount = feedback.length;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => this.handlePageChange(i, event)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        leftAction={() => this.handleLeftAction(pagesCount)}
        rightAction={() => this.handleRightAction()}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client Feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
                {feedback.slice(activePage, activePage + 1).map((item, index) => (
                  <div key={index}>
                    <div className={styles.feedback}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faQuoteRight}
                      ></FontAwesomeIcon>
                      <p className={styles.comment}>{item.comment}</p>
                      <div className={styles.client}>
                        <img
                          className={styles.image}
                          src={item.image}
                          alt='productFurniture'
                        />
                        <div className={styles.clientdata}>
                          <p>{item.name}</p>
                          <p>{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      comment: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Feedback;
