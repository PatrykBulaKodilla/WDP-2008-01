import React from 'react';
import { shallow } from 'enzyme';
import CurrencyToggle from './CurrencyToggle';

const mockProps = [
  { key: 'United States', name: 'USD', value: 1, icon: '$' },
  { key: 'Polish', name: 'PLN', value: 3.74, icon: 'zł' },
  { key: 'Great Britain', name: 'GBP', value: 0.76, icon: '£' },
  { key: 'Japan', name: 'JPY', value: 105.83, icon: '¥' },
];

describe('Component CurrencyToggle', () => {
  it('should render without crashing', () => {
    const component = shallow(<CurrencyToggle currencyOptions={mockProps} />);
    expect(component).toBeTruthy();
  });
});
