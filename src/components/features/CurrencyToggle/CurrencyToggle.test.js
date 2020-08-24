import React from 'react';
import { shallow } from 'enzyme';
import CurrencyToggle from './CurrencyToggle';

describe('Component CurrencyToggle', () => {
  it('should render without crashing', () => {
    const component = shallow(<CurrencyToggle />);
    expect(component).toBeTruthy();
  });
});
