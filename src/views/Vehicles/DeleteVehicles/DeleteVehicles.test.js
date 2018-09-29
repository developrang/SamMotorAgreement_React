import React from 'react';
import DeleteVehicles from './DeleteVehicles';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<DeleteVehicles />);
});
