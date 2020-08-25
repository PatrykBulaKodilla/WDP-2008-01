import React from 'react';
import { shallow } from 'enzyme';
import ChangeLanguage from './ChangeLanguage';

describe('Component ChangeLanguage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ChangeLanguage />);
    expect(component).toBeTruthy();
  });
});
