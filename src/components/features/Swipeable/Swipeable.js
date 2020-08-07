import React from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

const Swipeable = props => {
  return <div className={styles.root}>{props.children}</div>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
};

export default Swipeable;
