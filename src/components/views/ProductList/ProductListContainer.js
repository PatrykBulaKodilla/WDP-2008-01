import { connect } from 'react-redux';

import ProductList from './ProductList';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  shopList: getAll(state),
});

export default connect(mapStateToProps)(ProductList);
