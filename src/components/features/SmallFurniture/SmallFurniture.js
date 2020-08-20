import React from 'react';

import styles from './SmallFurniture.module.scss';

class SmallFurniture extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Small Furniture</h2>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <div className={`col-6 ${styles.image}`}></div>
                <div className='col-6'></div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className={`col-6 ${styles.image}`}></div>
                <div className='col-6'></div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className={`col-6 ${styles.image}`}></div>
                <div className='col-6'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallFurniture;
