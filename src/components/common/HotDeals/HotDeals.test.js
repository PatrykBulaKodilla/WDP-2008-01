import React from 'react';
import { shallow } from 'enzyme';
import HotDeals from './HotDeals';

describe('Component HotDeals', () => {
  it('should render without crashing', () => {
    const component = shallow(<HotDeals />);
    expect(component).toBeTruthy();
  });
});
