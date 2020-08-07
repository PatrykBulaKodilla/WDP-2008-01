import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getAllFavorites, setFavoriteProduct } from '../../../redux/favoriteRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  favoriteProducts: getAllFavorites(state),
});

const mapDispatchToProps = dispatch => ({
  setFavoriteProduct: product => dispatch(setFavoriteProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
