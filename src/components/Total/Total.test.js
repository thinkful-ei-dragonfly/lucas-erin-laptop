import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import Total from './Total'
configure({ adapter: new Adapter() });

describe('Summary Section', () => {

  const summary = {
    Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
    "Operating System": {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
    "Video Card":{
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
    Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
  }
  const total = Object.keys(summary)
        .reduce((acc, curr) => acc + summary[curr].cost, 0);

  it('renders with enzyme', () => {
    const wrapper = shallow(<Total total={total}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
