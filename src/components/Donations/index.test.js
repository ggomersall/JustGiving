import React from 'react';
import { shallow } from 'enzyme';
import Donations from './index.js';

describe('Testing Donations Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const charity = {lorem: ' some text'};
    const donations = {lorem2: ' some text other'};
    wrapper = shallow(<Donations charity={charity} donations={donations} />);
  });

  test('Snapshot', () => expect(<Donations />).toMatchSnapshot());

});

