import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<Slider />);
    expect(component).toBeTruthy();
  });
});
