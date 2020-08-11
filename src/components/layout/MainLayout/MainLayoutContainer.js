import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { getRwdMode } from '../../../redux/rwdRedux.js';

const mapStateToProps = state => ({
  rwdMode: getRwdMode(state),
});

export default connect(mapStateToProps)(MainLayout);
