import React from 'react';
import { shallow } from 'enzyme';
import CartPopup from './CartPopup';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartPopup />);
    expect(component).toBeTruthy();
  });
});
