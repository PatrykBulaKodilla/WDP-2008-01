import React from 'react';

import styles from './SmallFurniture.module.scss';

class SmallFurniture extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Small Furniture</h2>
      </div>
    );
  }
}

export default SmallFurniture;
