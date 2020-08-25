import { connect } from 'react-redux';
import CartPopup from '../../features/CartPopup/CartPopup';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(CartPopup);
