import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { getRwdOptions } from '../../../redux/rwdRedux.js';

const mapStateToProps = state => ({
  rwdMode: getRwdOptions(state).mode,
});

export default connect(mapStateToProps)(MainLayout);
