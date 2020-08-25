import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import SuggestedProducts from '../../features/SuggestedProducts/SuggestedProductContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Newsletter from '../../features/Newsletter/Newsletter';
import ComprasionBox from '../../features/ComprasionBox/ComprasionBoxContainer';

const Homepage = () => (
  <div className={styles.root}>
    <SuggestedProducts />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
    <Newsletter />
    <ComprasionBox />
  </div>
);

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;
