import React from 'react';
import EditAgreements from './EditAgreements';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<EditAgreements />);
});
