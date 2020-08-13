import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';

const promotions = [
  {
    id: 'promotion-1',
    image: 'https://elmar.home.pl/files/ritmo_(2)-1.jpg',
    alt: 'promo-1',
    text_p: 'GUEST ROOM',
    text_bold: 'SOFA',
    text_value: ' -20% ',
  },
  {
    id: 'promotion-2',
    image: 'https://houseform.pl/!data/gallery/b_161449_22092014_largo_houseform.jpg',
    alt: 'promo-2',
  },
  {
    id: 'promotion-3',
    image: 'https://klimapoint.pl/wp-content/uploads/2020/04/gree2020.jpg',
    alt: 'promo-3',
  },
];

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promotions promotions={promotions} />);
    expect(component).toBeTruthy();
  });
});
