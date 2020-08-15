import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll, getProduct } from '../../../redux/categoriesGalleryRedux';

const mapStateToProps = state => ({
  categoriesGallery: getAll(state),
  products: getProduct(state),
});

export default connect(mapStateToProps)(Gallery);
