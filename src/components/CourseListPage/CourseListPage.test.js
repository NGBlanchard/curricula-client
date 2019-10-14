import CourseListPage from './CourseListPage'
import React from 'react'
import { shallow, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

describe('<CourseListPage />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseListPage/>)
  })
})