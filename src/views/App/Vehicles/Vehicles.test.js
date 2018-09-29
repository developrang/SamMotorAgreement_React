import React from 'react';
import Vehicles from './Vehicles';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Vehicles />);
});
