import { connect } from 'react-redux';
import CurrencyToggle from './CurrencyToggle';

import { getCurrencyDropdown } from '../../../redux/currencyRedux';
import { setCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currencyOptions: getCurrencyDropdown(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrency: (name, value) => dispatch(setCurrency(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToggle);
