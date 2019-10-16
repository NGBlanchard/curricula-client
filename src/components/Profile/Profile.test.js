import Profile from './Profile'
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });


describe('<Profile />', () => {
  it('Renders without crashing', () => {
    
    mount(
      <Router>
        <Profile/>
      </Router>, )
  })
  it('renders user Profile by default', () => {
    const wrapper = mount(<Router><Profile /></Router>)
    expect(toJson(wrapper)).toMatchSnapshot()  
  });
})
