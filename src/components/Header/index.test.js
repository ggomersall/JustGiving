import React from 'react';
import { shallow } from 'enzyme';
import Header from './index.js';

describe('Testing Header Component', () => {
  it('renders correctly', () => {
    shallow(<Header />);
  });
});

expect(<Header />).toMatchSnapshot();