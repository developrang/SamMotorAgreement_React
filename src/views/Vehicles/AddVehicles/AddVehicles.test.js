import React from 'react';
import AddVehicles from './AddVehicles';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AddVehicles />);
});
