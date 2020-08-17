import { connect } from 'react-redux';
import SuggestedProducts from './SuggestedProducts';

import { getHotDeals } from '../../../redux/hotDealsRedux.js';
import { getSuggestedSlider } from '../../../redux/suggestedSliderRedux.js';

const mapStateToProps = state => ({
  hotDeals: getHotDeals(state),
  suggestedSlider: getSuggestedSlider(state),
});

export default connect(mapStateToProps)(SuggestedProducts);
