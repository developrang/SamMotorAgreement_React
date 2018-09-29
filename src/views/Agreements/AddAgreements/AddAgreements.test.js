import React from 'react';
import AddAgreements from './AddAgreements';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AddAgreements />);
});
