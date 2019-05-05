import React from 'react';
import { shallow } from 'enzyme';
import DonationItem from './index.js';

describe('Testing DonationItem Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const data = { 
      imageUrl: 'http://placeholder.com/150',
      donorDisplayName: 'Joe Bloggs',
      donorLocalAmount: 15.00,
      estimatedTaxReclaim: 1.50,
      message: 'lorem ipsum message'
    };
    wrapper = shallow(<DonationItem data={data} />);
  });

  test('Snapshot', () => expect(<DonationItem />).toMatchSnapshot());

});

