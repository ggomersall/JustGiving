import React from 'react';
import { shallow } from 'enzyme';
import DonationItems from './index.js';

describe('Testing DonationItems Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const donations = { 
      donations: [
        {donation: 'some data'}, {donation: 'more data'}
      ]
    };
    wrapper = shallow(<DonationItems donations={donations} />);
  });

  test('Snapshot', () => expect(<DonationItems />).toMatchSnapshot());

});

