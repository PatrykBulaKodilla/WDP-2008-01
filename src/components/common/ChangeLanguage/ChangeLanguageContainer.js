import { connect } from 'react-redux';

import ChangeLanguage from './ChangeLanguage';

import {
  getLanguage,
  createActionToggleLanguage,
} from '../../../redux/changeLanguageRedux';

const mapStateToProps = state => ({
  language: getLanguage(state),
});

const mapDispatchToProps = dispatch => ({
  toggleLanguage: language => dispatch(createActionToggleLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
