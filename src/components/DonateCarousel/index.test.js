import React from 'react';
import { shallow } from 'enzyme';
import DonateCarousel from './index.js';

describe('Testing DonateCarousel Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const charity = { 
      donationDisplayAmounts: [{amount: 30, description: 'lorem test'}]
    };
    wrapper = shallow(<DonateCarousel charity={charity} />);
  });

  test('Snapshot', () => expect(<DonateCarousel />).toMatchSnapshot());

});

