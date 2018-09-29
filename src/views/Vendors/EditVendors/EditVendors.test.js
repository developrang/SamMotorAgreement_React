import React from 'react';
import EditVendors from './EditVendors';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<EditVendors />);
});
