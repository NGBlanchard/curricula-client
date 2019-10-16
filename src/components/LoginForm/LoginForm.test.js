import LoginForm from './LoginForm'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    mount(<LoginForm/>)
  })
})
