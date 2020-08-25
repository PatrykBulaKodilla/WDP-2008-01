import { connect } from 'react-redux';

import ChangeLanguage from './ChangeLanguage';

import { getLanguage, changeLanguage } from '../../../redux/changeLanguageRedux';

const mapStateToProps = state => ({
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
