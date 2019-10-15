import CourseListItem from './CourseListItem'

import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('<CourseListItem />', () => {
  it('Renders without crashing', () => {
    const course = {
        id: 4,
        title: 'title',
        description: 'description',
        readings: 'readings',
        notes: 'notes',
        topic: 'topic',
        date_created: 'date',
        author_id: 2
      }

    const context = {
      clearError(){
        this.setState({ error: null })
      } 
    }

    mount(<CourseListItem
      key={course.id}
      course={course}
    />, context)
  })
})
