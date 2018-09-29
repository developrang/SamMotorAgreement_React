import React from 'react';
import AddVendors from './AddVendors';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AddVendors />);
});
