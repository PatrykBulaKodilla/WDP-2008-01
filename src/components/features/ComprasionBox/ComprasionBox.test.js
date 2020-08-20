import React from 'react';
import { shallow } from 'enzyme';
import ComprasionBox from './ComprasionBox';

describe('Component ComprasionBox.js', () => {
  it('should render without crashing', () => {
    const component = shallow(<ComprasionBox />);
    expect(component).toBeTruthy();
  });
});
