import { connect } from 'react-redux';
import CurrencyToggle from './CurrencyToggle';

import { getCurrencyDropdown } from '../../../redux/currencyRedux';
import { setCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currencyOptions: getCurrencyDropdown(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrency: value => dispatch(setCurrency(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToggle);
