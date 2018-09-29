import React from 'react';
import DeleteAgreements from './DeleteAgreements';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<DeleteAgreements />);
});
