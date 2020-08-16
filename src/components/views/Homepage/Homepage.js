import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import SuggestedProducts from '../../features/SuggestedProducts/SuggestedProducts';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <SuggestedProducts />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <Feedback />
  </div>
);

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;
