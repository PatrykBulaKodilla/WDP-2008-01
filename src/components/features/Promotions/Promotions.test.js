import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promotions />);
    expect(component).toBeTruthy();
  });
});
