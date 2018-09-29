import React from 'react';
import Agreements from './Agreements';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Agreements />);
});
