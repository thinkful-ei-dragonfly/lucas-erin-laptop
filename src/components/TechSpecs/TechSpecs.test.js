import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import TechSpecs from './Techspecs';
import STORE from '../../STORE.js'
import App from '../../App'
configure({ adapter: new Adapter() });

describe('TechSpecs', () => {
  const features = Object.keys(STORE)
        .map(key => {
          const options = STORE[key].map((item, index) => {
            const selectedClass = item.name === STORE[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
              <div className={featureClass}

                onClick={e => App.updateFeature(key, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>
          });

          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
        });
  it('renders with enzyme', () => {
    const wrapper = shallow(<TechSpecs features={features}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
