import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getCategory } from '../../../redux/categoriesGalleryRedux';
import { getGalleryPhotos } from '../../../redux/photosGalleryRedux';
import { getAll } from '../../../redux/productsRedux';
import { getCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  categoriesGallery: getCategory(state),
  galleryPhotos: getGalleryPhotos(state),
  products: getAll(state),
  currency: getCurrency(state),
});

export default connect(mapStateToProps)(Gallery);
