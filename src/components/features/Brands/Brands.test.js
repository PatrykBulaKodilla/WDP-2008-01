import React from 'react';
import { shallow } from 'enzyme';
import Brands from './Brands';

const mockProps = [
  {
    id: '1',
    image: 'image',
    alt: 'alt',
  },
  {
    id: '2',
    image: 'image',
    alt: 'alt',
  },
  {
    id: '3',
    image: 'image',
    alt: 'alt',
  },
];

it('renders without crashing', () => {
  const component = shallow(<Brands brands={mockProps} />);
  expect(component).toBeTruthy();
});
