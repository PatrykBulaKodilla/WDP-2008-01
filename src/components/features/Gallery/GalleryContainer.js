import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/categoriesGalleryRedux';

const mapStateToProps = state => ({
  categoriesGallery: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
