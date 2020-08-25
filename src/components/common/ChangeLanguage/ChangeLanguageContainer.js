import { connect } from 'react-redux';

import ChangeLanguage from './ChangeLanguage';

import {
  getLanguage,
  changeLanguage,
  // createActionActiveLanguage,
} from '../../../redux/changeLanguageRedux';

const mapStateToProps = state => ({
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
  // activeLanguage: dispatch(createActionActiveLanguage({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
