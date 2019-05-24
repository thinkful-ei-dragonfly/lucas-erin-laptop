import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import Header from './Header'
configure({ adapter: new Adapter() });

  describe('Header', () => {
    it('renders with enzyme', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  })
