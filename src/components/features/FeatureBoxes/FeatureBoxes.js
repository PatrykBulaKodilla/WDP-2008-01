import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  //const [active] = React.useState(true);
  //const [hovered, setHovered] = useState(false);
  //const toggleHover = () => setHovered(!hovered);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <FeatureBox
              icon={faTruck}
              /*active={hovered ? {active} : ''}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}*/
              component={Link}
              exact
              to={``}
            >
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faHeadphones} component={Link} exact to={``}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faReplyAll} component={Link} exact to={``}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faBullhorn} component={Link} exact to={``}>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
