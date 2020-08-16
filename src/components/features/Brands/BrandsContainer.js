import { connect } from 'react-redux';
import Brands from './Brands';

import { getBrands } from '../../../redux/brandsRedux';

const mapStateToProps = state => ({
  brands: getBrands(state),
});

export default connect(mapStateToProps)(Brands);
