import { connect } from 'react-redux';

import ComprasionBox from './ComprasionBox';

import {
  getCompare,
  createActionRemoveFromCompare,
  createActionRemoveAllFromCompare,
} from '../../../redux/comprasionRedux.js';

const mapStateToProps = state => ({
  compare: getCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  removeFromCompare: product =>
    dispatch(
      createActionRemoveFromCompare({
        product,
      })
    ),
  removeAllFromCompare: () => dispatch(createActionRemoveAllFromCompare({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComprasionBox);
