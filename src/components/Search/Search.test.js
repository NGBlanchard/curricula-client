import Search from './Search'
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('<Search />', () => {
  it('Renders without crashing', () => {
    const courseList = []
    const filterList = () => {
      return;
    }
    mount(
      <Router>
        <Search courseList={courseList} filterList={() => filterList()}/>
      </Router>, )
  })
})
