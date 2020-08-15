import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getCategory } from '../../../redux/categoriesGalleryRedux';
import { getGalleryPhotos } from '../../../redux/photosGalleryRedux';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categoriesGallery: getCategory(state),
  galleryPhotos: getGalleryPhotos(state),
  products: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
