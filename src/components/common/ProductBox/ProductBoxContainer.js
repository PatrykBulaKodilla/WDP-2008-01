import { connect } from 'react-redux';

import ProductBox from './ProductBox.js';

import { createActionAddToCompare } from '../../../redux/comprasionRedux';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addToCompare: (name, id, image) =>
    dispatch(createActionAddToCompare({ name, id, image })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
