import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index.js';

describe('Testing Loading Component', () => {

  let wrapper;

  it('renders correctly', () => {
    shallow(<Loading />);
  });

  test('it should render loading props correctly', () => {
    const loading = true;
    wrapper = shallow(<Loading loading={loading} />);
  });

  test('Snapshot', () => expect(<Loading />).toMatchSnapshot());

});

