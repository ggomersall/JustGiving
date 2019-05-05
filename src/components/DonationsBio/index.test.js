import React from 'react';
import { shallow } from 'enzyme';
import DonationsBio from './index.js';

describe('Testing DonationsBio Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const charity = {
      name: 'Macmillan',
      description: 'lorem ipsum text',
      websiteUrl: 'http://www.justgiving.com',
      emailAddress: 'macmillan@justgiving.com',
      registeredNumber: 12344
    };
    wrapper = shallow(<DonationsBio charity={charity} />);
  });

  test('Snapshot', () => expect(<DonationsBio />).toMatchSnapshot());

});

