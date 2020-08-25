import { connect } from 'react-redux';
import ProductPage from './ProductPage';

import { getCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps)(ProductPage);
