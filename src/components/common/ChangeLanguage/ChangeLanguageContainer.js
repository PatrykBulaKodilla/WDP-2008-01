import { connect } from 'react-redux';

import ChangeLanguage from './ChangeLanguage';

import {
  getLanguage,
  createActionHandleLanguageChange,
} from '../../../redux/changeLanguageRedux';

const mapStateToProps = state => ({
  language: getLanguage(state),
});

const mapDispatchToProps = dispatch => ({
  handleLanguageChange: language =>
    dispatch(createActionHandleLanguageChange(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
