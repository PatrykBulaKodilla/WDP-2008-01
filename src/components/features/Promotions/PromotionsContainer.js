import { connect } from 'react-redux';
import Promotions from '../../features/Promotions/Promotions';

import { getPromotions } from '../../../redux/promotionsRedux';

const mapStateToProps = state => ({
  promotions: getPromotions(state),
});

export default connect(mapStateToProps)(Promotions);
