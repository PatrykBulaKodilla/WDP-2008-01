import { connect } from 'react-redux';
import Brands from './Brands';

import { getBrands } from '../../../redux/brandsRedux';
import { getBrandOnPageSetting, getRwdMode } from '../../../redux/rwdRedux';

const mapStateToProps = state => {
  const rwdMode = getRwdMode(state);

  return {
    brands: getBrands(state),
    brandsOnPage: getBrandOnPageSetting(state, rwdMode),
  };
};

export default connect(mapStateToProps)(Brands);
