import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('Component Slider', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Slider products={[{ name: 'name', id: 'id', image: 'image.jpg' }]} />
    );
    expect(component).toBeTruthy();
  });
});
