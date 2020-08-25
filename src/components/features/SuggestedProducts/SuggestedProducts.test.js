import React from 'react';
import { shallow } from 'enzyme';
import SuggestedProducts from './SuggestedProducts';

describe('Component SuggestedProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <SuggestedProducts
        suggestedSlider={[{ name: 'name', id: 'id', image: 'image.jpg' }]}
        hotDeals={[{ name: 'name', id: 'id', image: 'image.jpg' }]}
      />
    );
    expect(component).toBeTruthy();
  });
});
