import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import SuggestedProducts from '../../features/SuggestedProducts/SuggestedProducts';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <SuggestedProducts />
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
  </div>
);

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;
