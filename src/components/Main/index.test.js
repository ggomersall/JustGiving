import React from 'react';
import { shallow } from 'enzyme';
import Main from './index.js';

describe('Testing Main Component', () => {

  let wrapper;

  it('renders correctly', () => {
    shallow(<Main />);
  });

  test('it should render loading props correctly', () => {
    const likes = 100;
    const care = true;
    const charity = {data: 'ipsum data'};
    const donations = {data: 'ipsum data 2'};
    wrapper = shallow(<Main likes={likes} care={care} charity={charity} donations={donations} />);
  });

  test('Snapshot', () => expect(<Main />).toMatchSnapshot());

});

