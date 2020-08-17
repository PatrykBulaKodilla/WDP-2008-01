import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe('Component Banner', () => {
  it('should render without crashing', () => {
    const component = shallow(<Banner />);
    expect(component).toBeTruthy();
  });
});
