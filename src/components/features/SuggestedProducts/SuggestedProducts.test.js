import React from 'react';
import { shallow } from 'enzyme';
import SuggestedProducts from './SuggestedProducts';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<SuggestedProducts />);
    expect(component).toBeTruthy();
  });
});
