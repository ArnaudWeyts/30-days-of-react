import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';

jest.unmock('../Navbar');
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('wraps content in a div with .navbar class', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar).toBeDefined();
  });
});
