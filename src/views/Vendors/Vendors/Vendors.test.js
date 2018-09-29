import React from 'react';
import Vendors from './Vendors';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Vendors />);
});
