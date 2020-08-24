import React from 'react';
import { shallow } from 'enzyme';
import CartPopup from './CartPopup';

const products = [
  {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    price: 30,
    image:
      'https://scandinavianliving.pl/userdata/public/gfx/9ff052bf0a47985baa8e54ccbc6e832d.jpg',
  },
  {
    id: 'aenean-ru-bristique-2',
    name: 'Aenean Ru Bristique 2',
    price: 30,
    image:
      'https://cdn.habitat.fr/thumbnails/product/866/866233/box/1200/1200/80/eskyss-aparador-vitrina-alto-de-nogal_866233.jpg',
  },
];

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartPopup products={products} />);
    expect(component).toBeTruthy();
  });
});
