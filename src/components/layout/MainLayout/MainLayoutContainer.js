import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { getRwdMode, setRwdMode, getModeMaxWidth } from '../../../redux/rwdRedux.js';

const mapStateToProps = state => ({
  rwdMode: getRwdMode(state),
  rwdModeMaxWidth: getModeMaxWidth(state),
});

const mapDispatchToProps = dispatch => ({
  setRwdMode: mode => dispatch(setRwdMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
