import LoginPage from './LoginPage'
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    mount(
      <Router>
        <LoginPage/>
      </Router>
    )
  })
})