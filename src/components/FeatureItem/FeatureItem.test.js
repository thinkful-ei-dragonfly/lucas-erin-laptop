import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import FeatureItem from './FeatureItem';
import STORE from '../../STORE.js'
import App from '../../App'
configure({ adapter: new Adapter() });

describe('FeatureItem', ()=> {
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
    const wrapper = shallow(<FeatureItem features={features}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('simulates clicking 2nd li', () => {
    const wrapper = shallow(<FeatureItem features={features} />)
    wrapper.find('li').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('simulates multiple clicks', () => {
    const wrapper = shallow(<FeatureItem features={features} />)
    wrapper.find('li').at(1).simulate('click')
    wrapper.find('li').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
