import { connect } from 'react-redux';
import HotDeals from './HotDeals';

import { getCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps)(HotDeals);
