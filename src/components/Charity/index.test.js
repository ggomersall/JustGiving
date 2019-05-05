import React from 'react';
import { shallow } from 'enzyme';
import Charity from './index.js';

describe('Testing Charity Component', () => {

  let wrapper;

  test('it should render data correctly', () => {
    const likes = 100;
    const care = true;
    const charity = { 
      logoAbsoluteUrl: 'https://placeholder.com/150',
      name: 'Macmillan', 
      impactStatementWhat: 'lorem test', 
      impactStatementWhy: 'extra lorem text' 
    };
    wrapper = shallow(<Charity charity={charity} likes={likes} care={care} />);
  });

  test('Snapshot', () => expect(<Charity />).toMatchSnapshot());

});

