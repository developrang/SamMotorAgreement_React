import React from 'react';
import EditVehicles from './EditVehicles';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<EditVehicles />);
});
