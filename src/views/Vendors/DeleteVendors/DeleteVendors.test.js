import React from 'react';
import DeleteVendors from './DeleteVendors';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<DeleteVendors />);
});
