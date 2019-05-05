import React from 'react';
import { shallow } from 'enzyme';
import Care from './index.js';

describe('Testing Care Component', () => {

  let wrapper;

  it('renders correctly', () => {
    shallow(<Care />);
  });

  test('it should render likes and care props correctly', () => {
    const likes = 100;
    const care = true;
    wrapper = shallow(<Care likes={likes} care={care} />);
  });

  test('Snapshot', () => expect(<Care />).toMatchSnapshot());

});

