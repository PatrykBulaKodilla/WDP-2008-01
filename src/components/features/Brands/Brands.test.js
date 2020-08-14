import React from 'react';
import { shallow } from 'enzyme';
import Brands from './Brands';

it('renders without crashing', () => {
  const component = shallow(<Brands />);
  expect(component).toBeTruthy();
});
