import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SuggestedProducts from '../../features/SuggestedProducts/SuggestedProducts';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <SuggestedProducts />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
